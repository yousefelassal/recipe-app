import { getRecipes } from '@/sanity/lib/client';
import Recipes from './recipes';

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <section
      className="pt-12"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-12">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
            Our Recipe Collection
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Browse and sort our collection of recipes, get step-by-step instructions and photos for every recipe.
          </p>
        </header>
        <Recipes recipes={recipes} />        
      </div>
    </section>
  )
}