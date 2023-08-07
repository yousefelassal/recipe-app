'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Page } from '@/types/Page'
import { usePathname } from 'next/navigation'
import styles from '@/styles/nav.module.css'
import { useState } from 'react'

type Props = {
    pages: Page[]
}

export default function Navbar({ pages }: Props) {
    const [isChecked, setIsChecked] = useState(false);
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
    
    const toggle = () => {
        setIsChecked(!isChecked);
    }

  return (
    <>
        <nav className="flex md:hidden fixed top-0 items-center justify-between px-6 pt-4 pb-1 w-screen z-50 backdrop-blur-sm">
            <Link 
                href="/"
                onClick={() => setIsChecked(false)}
            >
                <Image src="/logo.png" width={125} height={75} alt="logo" priority />
            </Link>
            <input 
                type="checkbox"
                className={`${styles.checkbox} z-[100]`}
                id="checkbox"
                checked={isChecked}
                onChange={toggle}
            />
                <label htmlFor="checkbox" className={styles.toggle}>
                    <div className={`${styles.bars} ${styles.bar1}`}></div>
                    <div className={`${styles.bars} ${styles.bar2}`}></div>
                    <div className={`${styles.bars} ${styles.bar3}`}></div>
                </label>
        </nav>
            <div className={`${isChecked ? 'flex flex-col z-40' : 'hidden'} bg-[#F6EDE7] ${styles.navAnimation} fixed p-6 pt-24 inset-0 transition-all ease-in-out gap-4`} role="dialog" aria-modal="true">
                {navigation.map((item) => (
                    <Link 
                        href={item.href}
                        key={item.name}
                        className={`${item.current ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-950'} relative text-2xl transition-colors`}
                        onClick={() => setIsChecked(false)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </>
  )
}
