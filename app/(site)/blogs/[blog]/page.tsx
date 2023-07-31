import { getBlog } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
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
            <div className="relative z-10 gap-5 items-center lg:flex flex-col">
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <Image 
                        src={blog.image} 
                        alt={blog.title}
                        width={1280}
                        height={900}
                        className="w-full rounded-lg border-b border-gray-200 shadow-xl"
                    />
                </div>
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left lg:px-48 px-4">
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