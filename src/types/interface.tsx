import { LucideIcon } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

export interface SocialLink {
    href: string;
    icons: LucideIcon
}
export interface NavLink extends SocialLink  {
    title: string;
    // href: string;
    // icons: LucideIcon;
}

export interface Statistics{
    label: string;
    value: number;
}

export type SkillCategory = "frontend" | "backend" | "tools";

export interface Skill {
    _id: string;
    Label: string;
    value: number;
    category: string;
}

export interface TabItem {
    value: SkillCategory;
    icon: LucideIcon;
    label: string;
}



export interface Project {
    _id: string;
    title: string;
    description: string;
    images: Url[];
    tags: string[];
    demoLink: string;
    githubLink: string;
    publishedAt: Date;
    isResponsive: boolean;
  }