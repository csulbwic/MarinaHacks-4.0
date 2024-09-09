import React from 'react'
import Image from 'next/image'
import style from '../styles/landing.module.css'

export const Landing = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Image 
        src="/images/logos_4.0/stickers.png"
        alt='MarinaHacks 4.0 Logo'
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  )
}