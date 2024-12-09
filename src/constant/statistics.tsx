import { getSkills } from "@/lib/skills";
import { Statistics } from "@/types/interface"
export async function getStatistics(){
    const frontendSkills = await getSkills("frontend");
    const backendSkills = await getSkills("backend");
    const tools = await getSkills("tools");
  
    const totalSkills: number =
      frontendSkills.length + backendSkills.length + tools.length;

    const statistics:Statistics[] = [
        {
            label:"Years Experience",
            value: new Date().getFullYear() - 2022
        },
        {
            label: "Completed Projects",
            value:totalSkills
        }
    ]
    return {statistics}
}