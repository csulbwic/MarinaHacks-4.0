import style from '../styles/contact.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
export const Contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center py-20">
      <h1 className="text-6xl text-center font-bold text-black opacity-50 mt-20 mb-6">
        Hosted by Women in Computing at CSULB
      </h1>
      <div className="flex flex-row">
        <div className="m-12 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400">
          <Image
            src={"/images/MarinaHacks_3.5_Round_Logo.png"}
            alt='wiclogo'
            width="350"
            height="100"
          />
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="text-6xl font-bold leading-[77px] text-white"> Connect With Us </h1><br></br>

          <h2 className="text-base font-bold leading-[19px] text-[#0F516F]">for general questions or sponsorship inquiries, please email us at csulbwic@gmail.com !</h2><br></br>

          <div className="flex">
            { /*< a href="https://csulbwic.com/" target='_blank'>
              <Image
                src={"/images/wic_logo_white.png"}
                alt='wiclogo'
                width="100"
                height="100"
              /> 
            </a> */}
            <a href="https://www.facebook.com/wic.csulb/" target='_blank'>
              <FaFacebook className="h-[50px] w-[80px] text-white" />
            </a>
            <a href="https://www.instagram.com/csulbwic/?hl=en" target='_blank'>
              <button><FaInstagram className="h-[50px] w-[80px]  text-white" /></button>
            </a>
            <a href="https://www.linkedin.com/company/csulbwic/" target='_blank'>
              <button><FaLinkedin className="h-[50px] w-[80px]  text-white" /></button>
            </a>
            <a href="https://twitter.com/csulbwic" target='_blank'>
              <button><FaTwitter className="h-[50px] w-[80px]  text-white" /></button>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}