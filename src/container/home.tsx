import { buttonVariants } from '@/components/ui/button';
import { Effect } from '@/components/ui/effects';
import { socialLinks } from '@/constant/social-links'
import { cn } from '@/lib/utils';
import { ArrowRightCircle, Download,  } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function HomeSection() {
  return (
    <section id='home' className='grid md:grid-cols-12 items-center gap-6'>
      {/* {social links} */}
      <ul className='flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-full '>
        {socialLinks.map((link,index)=>{
          const {href, icons: Icon}=link;
          return(
            <li key={index} className='hover:text-primary'>
              <a href={href} target='_blank'>
                <Icon className='size-5'/>
              </a>
            </li>
          )
        })}
      </ul>
      {/* {presentation} */}
      <div className='md:col-span-6 flex flex-col items-center md:items-start gap-y-4'>
        <h1 className='text-3xl md:text-5xl font-bold text-foreground capitalize'>
          Hi, I&apos;m Shehab
        </h1>
        <h5 className='text-xl md:text-2xl font-semibold capitalize '>
          Frontend Developer
        </h5>
        <p className='leading-7 md:text-lg md:max-w-[85%] text-center md:text-start '>
        I am a Full Stack Developer specializing in designing and developing applications and websites using the latest technologies. I have experience in front-end development using tools like HTML, CSS, JavaScript, and Tailwind CSS, as well as building back-end systems with modern technologies to deliver comprehensive solutions.
        I am always striving to enhance user experience and optimize application performance, focusing on innovation and teamwork to achieve project goals
        </p>
        <div className='flex items-center gap-2 py-4'>
          <a href='#project' className={cn(buttonVariants({size:"lg"}),"px-4 md:px-4 ")}>
            <span>My Works</span>
            <ArrowRightCircle className='size-4'/>
          </a>
          <a href='/CV.pdf' className={cn( buttonVariants({variant:"outline", size:"lg"}),"px-4 md:px-4 ")}
          target='_blank' download
          >
            <span>download CV</span>
            <Download className='size-4'/>
          </a>
        </div>
      </div>
      {/* {image} */}
      <div className='md:col-span-5 grid place-content-center'>
        <div className='relative flex items-center justify-center size-80 md:size-96'>

          <Effect className='size-full'/>
          <Effect variant="square" 
          size={"sm"}
          className='top-[8%] left-[25%] -rotate-12'/>

          <Effect variant="square" 
          size={"sm"}
          className='top-[50%] right-[2%] rotate-12'/>

          <Effect variant="square" 
          size={"sm"}
          className='bottom-[18%] left-[12%] -rotate-6'/>

        <Image 
        width={420}
        height={420}
        alt='profile'
        src={"/profile2.jpg"}
        className='object-fill size-{80%} border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background'
        />
        </div>
      </div>
    </section>



  )
}
