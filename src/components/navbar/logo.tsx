import Image from 'next/image'
// import React, { use } from 'react'

export default function Logo() {
  return (
    <a href='/'>
        <Image src="/logo.png"  alt='logo' width={80} height={10} className=' rotate-90 rounded-full'/> 
    </a>
  )
}
