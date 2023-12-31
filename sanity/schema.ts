import { type SchemaTypeDefinition } from 'sanity'
import chef from './schemas/chef'
import ingredient from './schemas/ingredient'
import recipe from './schemas/recipe'
import page from './schemas/page'
import blog from './schemas/blog'
import client from './schemas/client'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    chef,
    ingredient,
    recipe,
    page,
    blog,
    client,
  ],
}
