import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Indie Brew',
  description: 'Your weekly personal feed digest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <main>
           {children}
        </main>
        {/* Footer */}
      </body>
    </html>
  )
}
