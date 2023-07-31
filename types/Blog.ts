import { PortableTextBlock } from "sanity";

type Author = {
    name: string;
    image: string;
}

export type Blog = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[];
    image: string;
    author: Author;
}