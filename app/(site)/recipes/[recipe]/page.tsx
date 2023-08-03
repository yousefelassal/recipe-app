import { getRecipe } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react'
import Image from 'next/image';

type Props = {
    params: {
        recipe: string;
    }
}

export default async function Recipe({params}: Props){
    const slug = params.recipe;
    const recipe = await getRecipe(slug);

    return (
        <section className="mt-24 mx-auto max-w-screen-xl overflow-x-hidden pb-12 px-4 flex flex-col gap-6 items-center lg:gap-14 lg:flex-row lg:justify-center md:px-8">
            <div className="relative">
                <h1 className="text-indigo-900 text-center font-bold text-4xl xl:text-5xl">
                {recipe.name}
                </h1>
                {recipe.image && (
                    <Image src={recipe.image} width={400} height={400} alt={"photo of " + recipe.name} className="object-cover"/>
                )}
                <div className="absolute top-0 -z-10">
                    <Image src="/blob.svg" width={500} height={500} alt="blob" className="opacity-50" />
                </div>
            </div>
            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                <div className="flex flex-col gap-2" id="handwritten">
                    <PortableText value={recipe.instructions} />
                </div>
            </div>
            </div>
        </section>
    )
}

