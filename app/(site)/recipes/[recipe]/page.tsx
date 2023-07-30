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
        <div className="pt-20 px-36 flex flex-col gap-8">
            <header>
                <h1 className="text-2xl">{recipe.name}</h1>
            </header>
            <div className="text-gray-200 justify-between text-lg flex">
                <PortableText value={recipe.instructions} />
                <div className="w-96 h-80 rounded-lg overflow-hidden relative">
                {recipe.image && (
                    <Image src={recipe.image} fill alt={"photo of " + recipe.name} className="object-cover"/>
                )}
                </div>
            </div>
        </div>
    )
}