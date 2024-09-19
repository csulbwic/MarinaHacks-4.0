import React from 'react'
import Image from 'next/image'
import style from '../styles/landing.module.css'
import { CountdownTimer } from './CountdownTimer'

export const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <Image 
          src="/images/logos_4.0/stickers.png"
          alt='MarinaHacks 4.0 Logo'
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
      <CountdownTimer targetDate="2024-10-26T10:00:00" />
    </div>
  )
}