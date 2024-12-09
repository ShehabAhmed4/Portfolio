import { client } from "@/sanity/lib/client"
import { SkillCategory, Skill } from "@/types/interface"

export async function getSkills(category: SkillCategory) {
    const query = `
          *[_type=="skills" && category=="${category}"]{
                _id,Label,value, category
        }[]
        `;
  
    const data = await client.fetch(query);
    return data as Skill[];
  }