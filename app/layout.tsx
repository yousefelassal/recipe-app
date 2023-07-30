'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  if(pathname.startsWith('/studio')) return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        <nav className="flex fixed top-0 items-center justify-between bg-teal-500 px-6 py-3 w-screen">
          <Link href="/">Recipe</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
