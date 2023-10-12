import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beuty Links',
  description: 'skin car products',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
    
    <header><Header /></header>    
    <body className={inter.className}>
      
      {children}
    </body>
    <footer>this is footer</footer>
    </html>
  )
}


