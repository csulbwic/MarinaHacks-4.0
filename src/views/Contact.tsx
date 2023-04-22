import style from '../styles/contact.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
export const Contact = () => {
  return (
      <div className="h-screen w-full bg-gradient-to-br from-[#459CB8] via-[#7275B6] to-[#7E76B1] flex items-start">
        <div className='absolute'></div>
          <Image
            src={"/images/logo_turtle.png"}
            alt='wiclogo'
            width="588"
            height="115"
          />
        <div className="absolute top-[20%] right-[5%]">
          <h1 className="text-6xl leading-[77px] text-white opacity-50"> Connect With Us </h1>

          <h2 className="text-base leading-[19px] text-white opacity-50">For general questions or sponsorship inquiries, please email us at csulbwic@gmail.com</h2>

          <div className="flex column">
            < a href="https://csulbwic.com/" target='_blank'>
              <Image
                src={"/images/wic_logo_white.png"}
                alt='wiclogo'
                width="100"
                height="100"
              />
            </a>
            <a href="https://www.facebook.com/wic.csulb/" target='_blank'>
              <FaFacebook className="h-[50px] w-[60px] color-white" />
            </a>
            <a href="https://www.instagram.com/csulbwic/?hl=en" target='_blank'>
              <button><FaInstagram className="h-[50px] w-[60px] color: white" /></button>
            </a>
            <a href="https://www.linkedin.com/company/csulbwic/" target='_blank'>
              <button><FaLinkedin className="h-[50px] w-[60px] color: white"/></button>
            </a>
            <a href="https://twitter.com/csulbwic" target='_blank'>
              <button><FaTwitter className="h-[50px] w-[60px] color: white" /></button>
            </a>
          </div>
        </div>
      </div>
    
  )
}