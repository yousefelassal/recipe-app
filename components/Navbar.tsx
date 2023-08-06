'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Page } from '@/types/Page'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

type Props = {
    pages: Page[]
}

export default function Navbar({ pages }: Props) {
    const path = usePathname();
    const isActive = (slug: string) => slug === path;

    const pagesNav = pages.map((page) => ({
        name: page.title,
        href: `/${page.slug}`,
        current: isActive(`/${page.slug}`),
    }))

    const nav = [
        {
            name: 'Recipes',
            href: '/recipes',
            current: isActive('/recipes'),
        },
        {
            name: 'Blogs',
            href: '/blogs',
            current: isActive('/blogs'),
        },
        {
            name: 'Contact',
            href: '/contact',
            current: isActive('/contact'),
        }
    ]

    const navigation = [...nav, ...pagesNav]
    

  return (
    <nav className="hidden md:flex fixed top-0 items-center justify-between px-12 pt-4 pb-1 w-screen z-50 backdrop-blur-sm">
          <Link href="/">
            <Image src="/logo.png" width={125} height={75} alt="logo" priority />
          </Link>
          <div className="flex gap-4">
            {navigation.map((item) => (
                <Link 
                    href={item.href}
                    key={item.name}
                    className={`${item.current ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-950'} relative transition-colors`}
                >
                    {item.name}
                    {item.current && (
                    <motion.div
                        className="absolute -bottom-1 left-0 w-full h-1 bg-indigo-600 rounded-tl-lg rounded-tr-lg"
                        layoutId="underline"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                    )}
                </Link>
            ))}
          </div>
        </nav>
  )
}
