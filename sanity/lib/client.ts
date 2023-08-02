import { 
  createClient,
  groq
} from 'next-sanity'

import { Recipe } from '@/types/Recipe'
import { Page } from '@/types/Page'
import { Blog } from '@/types/Blog'
import clientConfig from '@/sanity/config/client-config'

export async function getRecipes(): Promise<Recipe[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "chef": chef->{
        name,
      },
      category,
      "ingredients": ingredient[]{
        "name": ingredient->name,
        unit,
        wholeNumber,
        fraction,
      },
      instructions,
      likes,
    }`, {
      next: {
        revalidate: 60,
      }
    }
  )
}

export async function getRecipe(slug:string): Promise<Recipe>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "recipe" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "chef": chef->{
        name,
      },
      category,
      "ingredients": ingredient[]{
        "name": ingredient->name,
        unit,
        wholeNumber,
        fraction,
      },
      instructions,
      likes,
    }`,
    { slug,
      next: {
        revalidate: 60,
      }
    }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`, {
      next: {
        revalidate: 60,
      }
    }
  )
}

export async function getPage(slug:string): Promise<Page>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
    }`,
    { slug,
      next: {
        revalidate: 60,
      }
     }
  )
}

export async function getBlogs(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content,
      "author": author->{
        name,
        "image": image.asset->url,
      },
    }`, {
      next: {
        revalidate: 60,
      }
    }
  )
}

export async function getBlog(slug:string): Promise<Blog>{
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      content,
      "author": author->{
        name,
        "image": image.asset->url,
      },
    }`,
    { slug, 
      next: {
        revalidate: 60,
      }
    }
  )
}