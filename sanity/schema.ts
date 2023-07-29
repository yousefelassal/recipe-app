import { type SchemaTypeDefinition } from 'sanity'
import chef from './schemas/chef'
import ingredient from './schemas/ingredient'
import recipe from './schemas/recipe'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    chef,
    ingredient,
    recipe,
  ],
}
