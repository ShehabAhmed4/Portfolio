import { socialLinks } from '@/constant/social-links';
import { cn } from '@/lib/utils';
import React from 'react'
import { buttonVariants } from '../ui/button';


export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t pt-4 pb-28 md:pb-4'>
        <div className='container flex flex-col md:flex-row items-center justify-between gap-y-4 mx-auto px-40 py-4'>
            <p className='text-sm'>
                CopyRight &copy; {currentYear}
            </p>
            <div className='flex items-center gap-2 '>
                {socialLinks.map((link,index)=>{
                    const {href,icons:Icon} = link
                    return(
                        <a key={index} href={href} target='_blank' className={cn(buttonVariants({variant:"outline", size:"icon"}),"rounded-full" ,'hover:text-primary ')}>
                            <Icon className="size-4 "/>
                        </a>
                    )
                })}
            </div>
        </div>
    </footer>

  )
}
