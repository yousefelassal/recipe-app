import { getRecipes } from '@/sanity/lib/client';
import Recipes from './recipes';

export default async function RecipesPage() {
  const recipes = await getRecipes();

  if(recipes.length === 0) return (
    <section className="pt-12">
      <div className="container px-4 sm:px-6 lg:px-12 py-10 mx-auto animate-pulse">
          <h1 className="w-48 h-2 bg-gray-200 rounded-lg "></h1>

          <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg "></p>
          <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg sm:w-80 "></p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>

              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>

              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>

              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>

              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>

              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>

              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>

              <div className="w-full ">
                  <div className="w-full h-64 bg-gray-300 rounded-lg "></div>
                  
                  <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
                  <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
              </div>
          </div>
      </div>
  </section>
  );

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