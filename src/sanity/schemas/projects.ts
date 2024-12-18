// import { Rule } from "postcss"
// import { Rule } from "postcss"
import {defineField , defineType} from "sanity"
export default defineType ({
    name: "project",
    type : "document",
    title: "Project",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule)=>[Rule.required().min(3).error("minimum value is 1").max(100).error("max value is 100")]
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: "images",
            type: 'array',
            title: "Images",
            of:[{type:"image"}]
        }),
        defineField({
            name: "tags",
            type: 'array',
            title: "Tags",
            of:[{type:"string"}]
        }),
        defineField({
            name: "demoLink",
            type: 'url',
            title: "Demo Link",
        }),

        defineField({
                name: "githubLink",
                type: 'url',
                title: "Git Hub Repository Link",
        }),
        defineField({
                name: "publishedAt",
                type: 'date',
                title: "Published At ",
        }),
        defineField({
                name: "isResponsive",
                type: 'boolean',
                title: "Published At ",
                initialValue: true,
        })
    ]
})

