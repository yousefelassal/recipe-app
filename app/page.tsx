import Image from 'next/image'
import Link from 'next/link';

import { getRecipes } from '@/sanity/lib/client';

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div className="gap-8 flex flex-wrap p-8 pt-16">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="w-52 h-48 rounded-lg border border-gray-600 flex flex-col gap-2 items-center">
          <div className="w-full h-44 relative bg-gray-700">
          {recipe.image && (
              <Image src={recipe.image} fill alt={"photo of " + recipe.name}/>
              )}
          </div>
          {recipe.name}
        </div>
        )
      )}
    </div>
  )
}