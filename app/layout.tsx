import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexOps AI — Intelligent AI Solutions',
  description: 'Transforming Business with Intelligent AI Solutions. NexOps AI delivers cutting-edge artificial intelligence for marketing, customer service, analytics, and operations.',
  keywords: 'AI solutions, machine learning, business intelligence, automation, NexOps AI',
  openGraph: {
    title: 'NexOps AI',
    description: 'Transforming Business with Intelligent AI Solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  )
}
