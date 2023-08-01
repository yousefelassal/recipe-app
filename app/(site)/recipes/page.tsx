'use client'

import Image from 'next/image'
import Link from 'next/link';
import Dropdown from '@/components/Dropdown';
import { getRecipes } from '@/sanity/lib/client';
import { useEffect, useState } from 'react';
import { Recipe } from '@/types/Recipe';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes: () => Promise<Recipe[]>
      = async () => {
        const recipes = await getRecipes();

        return recipes;
    }

    fetchRecipes().then((recipes) => setRecipes(recipes));
  }, []);

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

        <div className="mt-8 flex items-center justify-between">
          <div className="flex">
            <Dropdown name="Filter" options={['shika','bala']} />
          </div>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-none">
          {recipes.map((recipe) => (
            <li key={recipe._id}>
              <Link href={`/recipes/${recipe.slug}`} className="group grid place-content-center overflow-hidden bg-white/30 rounded-lg">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  width={250}
                  height={250}
                  className="transition duration-500 group-hover:scale-105"
                />

                <div className="relative pt-3">
                  <h3
                    className="text-center pb-1 text-gray-700 group-hover:underline group-hover:underline-offset-4"
                  >
                    {recipe.name}
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}