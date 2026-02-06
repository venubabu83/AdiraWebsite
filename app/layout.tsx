import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Adira Badminton Academy - World-Class Coaching & Excellence',
  description: 'Adira Badminton Academy delivers world-class badminton coaching and nurtures young talent to compete at the highest level, including representing India professionally.',
  keywords: 'badminton academy, badminton coaching, professional badminton training, India badminton, Yonex badminton',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
