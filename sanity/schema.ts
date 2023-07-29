import { type SchemaTypeDefinition } from 'sanity'
import chef from './schemas/chef'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    chef,
  ],
}
