import SectionTitle from '@/components/section-title'
import { buttonVariants } from '@/components/ui/button'
import { Effect } from '@/components/ui/effects'
import { getStatistics } from '@/constant/statistics'
import { cn } from '@/lib/utils'
import { ArrowRightCircle,  } from 'lucide-react'

import React from 'react'

export default async function About() {
  const {statistics} = await getStatistics()
  return (
    // <section id='about' className='relative '>
    //   <Effect className='left-32 md:-left-44 -top-12'/>
    //   <article className='relative max-w-[50] mx-auto bg-background/90 border rounded-lg p-6  flex flex-col gap-y-6 '>
    //   {/* <Effect variant={"square"} size="default" className='-top-4 -right-5 -z-10 rotate-12'/> */}
    //   <SectionTitle title="about me"
    //     description='a quick introduction about me'
    //     className='items-start'
    //     />
    //     <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci porro assumenda aut ullam architecto magnam id placeat voluptates optio.</p>
    //     <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 items-end'>
    //       <div className='flex flex-col items-center md:items-start'>
    //       <p className='text-foreground text-2xl md:text-4xl font-bold '>+5</p>
    //       <p className='whitespace-nowrap text-sm md:text-lg'>Years Experience</p>
    //     </div>

    //     <div className='grid grid-cols-3 gap-x-4 items-end'>
    //       <p className='text-foreground text-2xl md:text-4xl font-bold '>+13</p>
    //       <p className='whitespace-nowrap text-sm md:text-lg'>Completed Projects</p>
    //     </div>
    //     <a href='#skills' className={cn(buttonVariants({size:"lg"}),"col-span-2 md:col-span-1")}>
    //       <span>discover skills</span>
    //       <ArrowRightCircle className='size-4'/>
    //     </a>
    //     </div>
    //   </article>

    // </section>





    <section id="about" className="relative">
    <Effect className="-left-32 md:-left-44 -top-12" />
    <article className="relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
      {/* <Effect
        variant="square"
        size="default"
        className="-top-4 -right-5 -z-10 rotate-12"
      /> */}
      <SectionTitle
        title="about me"
        description="a quick introduction about me"
        className="items-start"
      />
      <p className="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
        inventore vero minima consequuntur ipsam illo nemo nulla at voluptatum
        iusto. Dolores commodi provident facere blanditiis suscipit tempore
        praesentium nulla quaerat? Officia, officiis?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
        {statistics.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start"
          >
            <p className="text-foreground text-2xl md:text-4xl font-bold">
              +{item.value}
            </p>
            <p className="whitespace-nowrap text-sm md:text-lg ">
              {item.label}
            </p>
          </div>
        ))}
        <a
          href="#skills"
          className={cn(
            buttonVariants({ size: "lg" }),
            "col-span-3 md:col-span-1 "
          )}
        >
          <span>discover skills</span>
          <ArrowRightCircle className="size-4" />
        </a>
      </div>
    </article>
  </section>

  )
}
