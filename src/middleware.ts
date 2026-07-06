import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'site_access'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days

async function sha256(text: string) {
  const data = new TextEncoder().encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

function loginPage(showError: boolean) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>EMF Contracting — Preview</title>
<style>
  * { box-sizing: border-box; }
  body {
    background: #171717;
    color: #e5e5e5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
  }
  form {
    background: #1a1a18;
    padding: 2.75rem 2.5rem;
    border: 1px solid rgba(212,168,67,0.2);
    border-radius: 6px;
    text-align: center;
    width: 320px;
  }
  h1 {
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0 0 0.4rem;
    color: #fff;
    letter-spacing: 0.02em;
  }
  p.sub {
    font-size: 0.8rem;
    color: #888;
    margin: 0 0 1.6rem;
  }
  p.error {
    color: #e08585;
    font-size: 0.82rem;
    margin: 0 0 1rem;
  }
  input {
    width: 100%;
    padding: 12px 14px;
    margin-bottom: 1rem;
    background: #0f0f0f;
    border: 1px solid #2a2a28;
    color: #fff;
    border-radius: 4px;
    font-size: 15px;
  }
  input:focus { outline: none; border-color: #D4A843; }
  button {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #D4A843, #F0C866);
    border: none;
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    color: #171717;
    cursor: pointer;
  }
  button:hover { opacity: 0.92; }
</style>
</head>
<body>
  <form method="POST">
    <h1>EMF Contracting</h1>
    <p class="sub">Site in progress — enter password to preview</p>
    ${showError ? '<p class="error">Incorrect password, please try again.</p>' : ''}
    <input type="password" name="password" placeholder="Password" autofocus required />
    <button type="submit">Enter</button>
  </form>
</body>
</html>`
}

export async function middleware(req: NextRequest) {
  const password = process.env.SITE_PASSWORD

  // Fail-open if no password has been configured yet (so setup never locks anyone out).
  if (!password) {
    return NextResponse.next()
  }

  const expectedHash = await sha256(password)
  const cookie = req.cookies.get(COOKIE_NAME)?.value

  if (cookie === expectedHash) {
    return NextResponse.next()
  }

  if (req.method === 'POST') {
    const formData = await req.formData()
    const submitted = formData.get('password')?.toString() ?? ''

    if (submitted === password) {
      const res = NextResponse.redirect(new URL(req.nextUrl.pathname, req.url), 303)
      res.cookies.set(COOKIE_NAME, expectedHash, {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
        maxAge: COOKIE_MAX_AGE,
      })
      return res
    }

    return new NextResponse(loginPage(true), {
      status: 401,
      headers: { 'content-type': 'text/html' },
    })
  }

  return new NextResponse(loginPage(false), {
    status: 401,
    headers: { 'content-type': 'text/html' },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
