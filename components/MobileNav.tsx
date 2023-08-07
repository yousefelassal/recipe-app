'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Page } from '@/types/Page'
import { usePathname } from 'next/navigation'
import styles from '@/styles/nav.module.css'

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
    <>
        <nav className="flex md:hidden fixed top-0 items-center justify-between px-6 pt-4 pb-1 w-screen z-50 backdrop-blur-sm">
            <Link href="/">
                <Image src="/logo.png" width={125} height={75} alt="logo" priority />
            </Link>
            <button>
            <input type="checkbox" className={styles.checkbox} id="checkbox" />
                <label htmlFor="checkbox" className={styles.toggle}>
                    <div className={`${styles.bars} ${styles.bar1}`}></div>
                    <div className={`${styles.bars} ${styles.bar2}`}></div>
                    <div className={`${styles.bars} ${styles.bar3}`}></div>
                </label>
            </button>
        </nav>
            <div className="hidden gap-4" role="dialog" aria-modal="true">
                {navigation.map((item) => (
                    <Link 
                        href={item.href}
                        key={item.name}
                        className={`${item.current ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-950'} relative transition-colors`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
  )
}
