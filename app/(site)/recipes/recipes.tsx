'use client'

import { useState } from 'react';
import Dropdown from '@/components/Dropdown';
import Image from 'next/image';
import Link from 'next/link';


export default function Recipes({recipes}: {recipes: any}){
    const options = ['shika','bala'];
    const [enabled, setEnabled] = useState(options.map((option:string) => {
        return {
            name: option,
            enabled: false,
            }
        })
    );

    const handleEnabled = (option: string) => {
        return () => {
            setEnabled(enabled.map((item) => {
                if(item.name === option) {
                    return {
                        name: option,
                        enabled: !item.enabled,
                    }
                } else {
                    return item;
                }
            }))
        }
    }

    return (
        <>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex">
            <Dropdown name="Filter" options={['shika','bala']} handleEnabled={handleEnabled} enabled={enabled} />
          </div>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-none">
          {recipes.map((recipe:any) => (
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
        </>
    )
}