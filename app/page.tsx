import Image from 'next/image'
import Link from 'next/link';

import { getRecipes } from '@/sanity/lib/client';

export default async function Home() {
  const data = await getRecipes();
  console.log(data);

  return (
    <div className="min-h-screen p-4 pt-12">
      recipes go here
    </div>
  )
}