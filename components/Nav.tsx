import Link from 'next/link'
import { getPages } from '@/sanity/lib/client'
import Image from 'next/image'

export default async function Nav(){
  const pages = await getPages();

    return(
        <nav className="flex fixed top-0 items-center justify-between px-12 pt-4 pb-1 w-screen z-50 backdrop-blur-sm">
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
            <Link
              href="/blogs"
              className="hover:underline hover:underline-offset-2 text-gray-400 hover:text-gray-500"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              className="hover:underline hover:underline-offset-2 text-gray-400 hover:text-gray-500"
            >
              Contact
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
    )
}