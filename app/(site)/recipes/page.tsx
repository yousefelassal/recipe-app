import Image from 'next/image'
import Link from 'next/link';

import { getRecipes } from '@/sanity/lib/client';

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Our Recipe Collection
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Browse and sort our collection of recipes, get step-by-step instructions and photos for every recipe.
          </p>
        </header>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex rounded border border-gray-100">
            <button
              className="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </button>

            <button
              className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          </div>

          <div>
            <label htmlFor="SortBy" className="sr-only">SortBy</label>

            <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
              <option>Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
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