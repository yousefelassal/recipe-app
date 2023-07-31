import Image from 'next/image'
import Link from 'next/link';
import { format } from 'date-fns';
import { PortableText } from '@portabletext/react'

import { getBlogs } from '@/sanity/lib/client';

export default async function Blog() {
    const blogs = await getBlogs();

    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our blogs</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Get Inspired with Our Blog Posts
            </p>
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-400/80 pt-6 sm:mt-8 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs.map((blog) => (
            <Link key={blog._id} href={`/blogs/${blog.slug}`}>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <Image
                    height={250}
                    width={400}
                    alt="Office"
                    src={blog.image}
                    className="h-56 w-full object-cover"
                />
                
                <div className="bg-white p-4 sm:p-6">
                    <time dateTime={format(new Date(blog._createdAt), 'dd-M-yyyy')} className="block text-xs text-gray-500">
                    {format(new Date(blog._createdAt), 'do MMM yyyy')}
                    </time>
                
                    <h3 className="mt-0.5 text-lg text-gray-900">
                        {blog.title}
                    </h3>
                
                    <div className="mt-2 line-clamp-3 inline-block text-sm/relaxed text-gray-500">
                        <PortableText value={blog.content} />
                    </div>
                </div>
            </article>
            </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  