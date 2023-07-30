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
        <div className="pt-20 px-36 flex flex-col gap-8">
            <header>
                <h1 className="text-2xl">{page.title}</h1>
            </header>
            <div className="text-gray-200 text-lg flex flex-col gap-4">
                <PortableText value={page.content} />
            </div>
        </div>
    )
}