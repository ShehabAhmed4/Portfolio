import { client } from "@/sanity/lib/client"
import { Project } from "@/types/interface"

export async function getProjects() {
    const query = `
          *[_type=="project"]{
            _id,
            title,
            description,
            images,
            tags,
            demoLink,
            githubLink,
            publishedAt,
            isResponsive
        }
        `;
  
    const data = await client.fetch(query);
    return data as Project[];
  }