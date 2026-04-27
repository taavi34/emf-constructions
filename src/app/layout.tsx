import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'EMF Constructions — Building Excellence',
  description: 'Crafting timeless structures with uncompromising quality. From luxury residences to commercial landmarks — EMF Constructions brings vision to reality.',
  keywords: 'construction, luxury residential, commercial, interior renovation, custom carpentry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
