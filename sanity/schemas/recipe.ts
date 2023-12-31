export default{
    name:"recipe",
    title:"Recipe",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Recipe's name",
            type:"string",
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxLength:96,
            }
        },
        {
            name:"chef",
            title:"Chef",
            type:"reference",
            to:[{type:"chef"}],
        },
        {
            name:"mainImage",
            title:"Recipe's Main image",
            type:"image",
            options:{
                hotspot:true,
            }
        },
        {
            name:"category",
            title:"Category",
            type:"string",
            options: {
                list: [
                    {value:"seafood",title:"Seafood"},
                    {value:"meat",title:"Meat"},
                    {value:"salad",title:"Salad"},
                ]
            }
        },
        {
            name:"ingredient",
            title:"Ingredient",
            type:"array",
            of:[
                {
                    type:"object",
                    fields:[
                        {
                            name:"ingredient",
                            title:"Ingredient",
                            type:"reference",
                            to:[{type:"ingredient"}],
                        },
                        {
                            name:"wholeNumber",
                            title:"Whole number",
                            type:"number",
                        },
                        {
                            name:"fraction",
                            title:"Fraction",
                            type:"string",
                            options:{
                                list:[
                                    {title:"1/2",value:"1/2"},
                                    {title:"1/3",value:"1/3"},
                                    {title:"1/4",value:"1/4"},
                                    {title:"3/4",value:"3/4"},
                                    {title:"2/3",value:"2/3"},
                                ]
                            }
                        },
                        {
                            name:"unit",
                            title:"Unit",
                            type:"string",
                            options:{
                                list: ["grams","cup","Tbsp","tsp"]
                            },
                        }
                    ],
                    preview:{
                        select:{
                            title:"ingredient.name",
                            name:"ingredient.name",
                            media:"ingredient.image",
                            wholeNumber:"wholeNumber",
                            fraction:"fraction",
                            unit:"unit",
                        },
                        prepare({
                            title = "No title",
                            subtitle = "No subtitle",
                            media = "No media",
                            wholeNumber = "(No whole number set)",
                            fraction = "(No fraction set)",
                            unit = "(No unit set)",
                        }) {
                            return {
                                title,
                                subtitle:`${wholeNumber} ${fraction} ${unit}`,
                                media,
                            }
                        }
                    }
                }
            ]
        },
        {
            name:"instructions",
            title:"Instructions",
            type:"array",
            of:[{type:"block"}],
        },
        {
            name: "likes",
            title: "Likes",
            type: "number",
        }
    ],
    initialValue:{
        likes:0,
    },
}