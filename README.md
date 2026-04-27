# EMF Constructions

Premium construction company website built with Next.js, Supabase, and Resend.

## Tech Stack
- **Next.js 14** — React framework
- **Tailwind CSS** — Styling
- **Supabase** — Database for quote requests
- **Resend** — Email delivery
- **Vercel** — Hosting

## Pages
- `/` — Home (hero, services, stats, CTA)
- `/work` — Portfolio with filterable project gallery
- `/about` — Company story and values
- `/quote` — Quote request form

## Setup

1. Clone the repo
2. Copy `.env.local.example` to `.env.local` and fill in your keys
3. Run `npm install`
4. Run `npm run dev`

## Supabase Table

Run this SQL in your Supabase dashboard:

```sql
create table quote_requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  phone text,
  project_type text,
  budget text,
  location text,
  message text not null
);
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (keep secret) |
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_EMAIL` | Email address to receive quote notifications |
