import { getBlog } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Image from "next/image";

type Props = {
  params: {
    blog: string;
  };
}

export default async function Blog({ params }: Props) {
  const slug = params.blog;
  const blog = await getBlog(slug);

  return (
    <>
      <section className="cta-sec relative pt-20 max-w-screen-xl mx-auto py-4 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full opacity-40"></div>
            <div className="relative z-10 gap-5 items-center flex flex-col">
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <Image 
                        src={blog.image} 
                        alt={blog.title}
                        width={1280}
                        height={900}
                        className="w-full rounded-lg border-b border-gray-200 shadow-xl"
                    />
                </div>
                <div className="flex justify-start w-full gap-3 items-center lg:px-48 sm:px-16 md:px-32 px-4">
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                  <Image 
                        src={blog.author.image} 
                        alt={blog.author.name}
                        width={128}
                        height={128}
                        className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold text-lg text-gray-900">
                      {blog.author.name}
                    </div>
                    <div className="text-gray-800">
                      <time dateTime={format(new Date(blog._createdAt), 'dd-M-yyyy')} className="block text-xs text-gray-500">
                      {format(new Date(blog._createdAt), 'do MMM yyyy')}
                      </time>
                    </div>
                  </div>
                </div>
                <div className="flex-1 max-w-lg py-5 sm:mx-auto lg:max-w-max lg:text-left lg:px-48 px-4">
                    <h3 className="text-3xl text-gray-900 font-semibold md:text-4xl">
                        {blog.title}
                    </h3>
                    <div className="text-gray-800 leading-relaxed mt-3">
                      <PortableText value={blog.content} />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}