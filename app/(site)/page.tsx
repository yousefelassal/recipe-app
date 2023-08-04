import Image from 'next/image'
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import { getClients } from '@/sanity/lib/client';

export default async function Home() {
    const clients = await getClients();

    return (
        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px] -z-10' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative px-6'>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <Link href="/blogs/the-recipe-web-app-that-makes-cooking-easy" className='inline-flex group gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white/80'>
                                <span className='inline-block rounded-full px-3 py-1 bg-indigo-600 text-white'>
                                    News
                                </span>
                                <p className='flex items-center'>
                                    Read the launch post
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:translate-x-1 transition-transform w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </p>
                            </Link>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                              Your New Favorite Cooking Companion
                            </h1>
                            <p>
                              Get step-by-step instructions and photos, so you can cook like a pro. Cooking has never been easier!
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <Link href="/recipes" className="flex items-center group justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Get started
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:translate-x-1 transition-transform w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                <Link href="/contact" className="flex items-center group justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex">
                                    Contact us
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:translate-x-1 transition-transform w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            <Image src="/blob.svg" className="max-w-xl" height={400} width={576} alt={'msh 3aref'}/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="relative">
                <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
                <Features />
            </div>
            <Testimonials clients={clients} />
        </div>
    )
}