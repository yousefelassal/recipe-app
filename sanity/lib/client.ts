import { 
  createClient,
  groq
} from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { Recipe } from '@/types/Recipe'

export async function getRecipes(): Promise<Recipe[]> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })

  return client.fetch(
    groq`*[_type == "recipe"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "chef": chef->{
        name,
      },
      "ingredients": ingredient[]{
        "name": ingredient->name,
        unit,
        wholeNumber,
        fraction,
      },
      instructions,
      likes,
    }`
  )
}

export async function getRecipe(slug:string): Promise<Recipe>{
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })

  return client.fetch(
    groq`*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "chef": chef->{
        name,
      },
      "ingredients": ingredient[]{
        "name": ingredient->name,
        unit,
        wholeNumber,
        fraction,
      },
      instructions,
      likes,
    }`,
    { slug }
  )
}