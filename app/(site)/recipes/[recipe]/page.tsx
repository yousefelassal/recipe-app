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
        <div className="pt-20 px-36 flex flex-col gap-8 relative overflow-hidden min-h-screen">
            <header className="flex justify-center">
                <h1 className="text-5xl bg-gradient-to-r from-purple-600 via-red-500 to-orange-600 
                        bg-clip-text text-transparent drop-shadow font-bold w-auto">
                    {recipe.name}
                </h1>
            </header>
            <div className="text-gray-800 justify-between text-lg flex flex-wrap">
                <div className="relative">
                    {recipe.image && (
                        <Image src={recipe.image} width={400} height={400} alt={"photo of " + recipe.name} className="object-cover"/>
                    )}
                    <div className="absolute top-0 -z-10">
                        <Image src="/blob.svg" width={500} height={500} alt="blob" className="opacity-50" />
                    </div>
                </div>
                <div className="flex flex-col gap-2" id="handwritten">
                    <PortableText value={recipe.instructions} />
                </div>
            </div>
        </div>
    )
}