import { NavLink } from "@/types/interface"
import { Book, MessageSquareText, User, Wrench } from "lucide-react"
export const navLinks:NavLink[]= [
    {
        title: "About",
        href: "#about",
        icons: User
    },

    {
        title: "Skills",
        href: "#skills",
        icons: Wrench
    },

    {
        title: "Projects",
        href: "#project",
        icons: Book
    },

    {
        title: "Contact",
        href: "#contact",
        icons: MessageSquareText
    },
]