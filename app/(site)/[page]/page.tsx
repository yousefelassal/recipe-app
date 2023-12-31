import { getPage } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

type Props = {
    params: {
        page: string;
    }
}

export default async function Page({ params }: Props){
    const slug = params.page;
    const page = await getPage(slug);

    return (
        <div className="pt-20 pb-24 px-4 lg:px-36 flex flex-col gap-8 mb-2">
            <header>
                <h1 
                    className="text-5xl bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 
                        bg-clip-text text-transparent drop-shadow font-bold w-auto"
                >
                    {page.title}
                </h1>
            </header>
            <div className="text-gray-800 text-lg flex flex-col gap-4">
                <PortableText value={page.content} />
            </div>
        </div>
    )
}