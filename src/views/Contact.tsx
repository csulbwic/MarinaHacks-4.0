import style from '../styles/contact.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
export const Contact = () => {
  return (
      <div className="flex justify-center items-center">
        <div className="m-12 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <Image
            src={"/images/logo_turtle.png"}
            alt='wiclogo'
            width="588"
            height="115"
          />
        </div>
        <div className="flex-col ">
          <h1 className="text-6xl leading-[77px] text-white opacity-50"> Connect With Us </h1><br></br>

          <h2 className="text-base leading-[19px] text-white opacity-50">For general questions or sponsorship inquiries, please email us at csulbwic@gmail.com</h2><br></br>

          <div className="flex">
            < a href="https://csulbwic.com/" target='_blank'>
              <Image
                src={"/images/wic_logo_white.png"}
                alt='wiclogo'
                width="100"
                height="100"
              />
            </a>
            <a href="https://www.facebook.com/wic.csulb/" target='_blank'>
              <FaFacebook className="h-[50px] w-[60px] text-white" />
            </a>
            <a href="https://www.instagram.com/csulbwic/?hl=en" target='_blank'>
              <button><FaInstagram className="h-[50px] w-[60px]  text-white" /></button>
            </a>
            <a href="https://www.linkedin.com/company/csulbwic/" target='_blank'>
              <button><FaLinkedin className="h-[50px] w-[60px]  text-white"/></button>
            </a>
            <a href="https://twitter.com/csulbwic" target='_blank'>
              <button><FaTwitter className="h-[50px] w-[60px]  text-white" /></button>
            </a>
          </div>
        </div>
      </div>
    
  )
}