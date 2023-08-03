const client = {
    name: 'client',
    title: 'Clients',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Client Name',
            type: 'string',
        },
        {
            name: 'job',
            title: 'Job Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'testimony',
            title: 'Testimony',
            type: 'string',
        },
    ],
}

export default client