import { 
  createClient,
  groq
} from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export async function getRecipes() {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  })

  client.fetch(
    groq`*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "chef": chef->{
        name,
      },
      "ingredients": ingredients[]{
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