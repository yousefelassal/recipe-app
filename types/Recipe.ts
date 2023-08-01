import { PortableTextBlock } from "sanity";

export type Recipe = {
    _id: string;
    _createdAt: Date;
    name: string;
    chef: object;
    ingredients: object[];
    instructions: PortableTextBlock[];
    likes: number;
    slug: string;
    image: string;
    category: string;
}
