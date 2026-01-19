import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Awesome Sites - Collection of Amazing Websites',
  description: 'A curated collection of 133+ amazing websites preserved for learning front-end technologies and creative inspiration.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
