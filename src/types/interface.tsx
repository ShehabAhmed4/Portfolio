import { LucideIcon } from "lucide-react";

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


// واجهة تمثل الصورة
export interface Image {
    _type: string; // نوع البيانات (قد يكون مفيدًا في Sanity)
    asset: {
      _ref: string; // مرجع الصورة في Sanity
      _type: string; // نوع المرجع
    };
  }


export interface Project {
    _id: string;
    title: string;
    description: string;
    images: Image[];
    tags: string[];
    demoLink: string;
    githubLink: string;
    publishedAt: Date;
    isResponsive: boolean;
  }