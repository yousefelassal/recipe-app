import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import Link from 'next/link'
import { getPages } from '@/sanity/lib/client'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className + "min-h-screen bg-[#F6EDE7]"}>
        <NextTopLoader showSpinner={false} color="#7D81E0" />
        <nav className="flex fixed top-0 items-center justify-between px-12 py-4 w-screen">
          <Link href="/">
            <Image src="/logo.png" width={125} height={75} alt="logo" priority />
          </Link>
          <div className="flex gap-4">
            <Link
              href="/recipes"
              className="hover:underline hover:underline-offset-2 text-gray-400 hover:text-gray-500"
            >
              Recipes
            </Link>
            {pages.map((page) => (
              <Link 
                href={`/${page.slug}`}
                key={page._id}
                className="hover:underline hover:underline-offset-2 text-gray-400 hover:text-gray-500"
              >
                {page.title}
              </Link>
              ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
