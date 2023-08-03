import { PortableTextBlock } from "sanity";

export type Client = {
    _id: string;
    name: string;
    image: string;
    job: string;
    testimony: PortableTextBlock[];
}