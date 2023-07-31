const blog = {
    name: 'blog',
    title: 'Blogs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Blog Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: "image",
            title: "Blog Image",
            type: "image",
            options: {
                hotspot: true,
            }
        },
        {
            name: 'content',
            title: 'Blog Content',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}

export default blog