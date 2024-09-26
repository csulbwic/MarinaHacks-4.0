import React from 'react'
import Image from 'next/image'
import style from '../styles/landing.module.css'
import { CountdownTimer } from './CountdownTimer'

export const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* FIXME: need to fix the response of the shark image */}
      {/*<div className={`${style.sharkImage} ${style.sharkAnimation}`}></div>*/}
      <div className={style.sharkImage}>
        <Image 
          src="/images/logos_4.0/MarinaHacks_Logo_4.0_Pallete.png"
          alt='MarinaHacks 4.0 Logo'
          width={500}
          height={500}
        />
      </div>
      <CountdownTimer targetDate="2024-10-26T11:00:00" />
    </div>
  )
}