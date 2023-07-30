import { getRecipe } from '@/sanity/lib/client';

type Props = {
    params: {
        recipe: string;
    }
}

export default async function Recipe({params}: Props){
    const slug = params.recipe;
    const recipe = await getRecipe(slug);

    return (
        <div className="pt-20 p-8 flexs flex-col">
            <h1 className="text-2xl">{recipe.name}</h1>
        </div>
    )
}