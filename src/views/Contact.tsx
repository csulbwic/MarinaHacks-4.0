import style from '../styles/contact.module.css'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"

export const Contact = () => {
  return (
    <div id="contact" className={`flex flex-col justify-center items-center py-20 ${style.contactContainer}`}>
      <h1 className="text-6xl text-center font-bold text-[#F26EAC] mt-10 mb-6">
        Women in Computing at CSULB
      </h1>
      <div className="flex flex-row">
        <div className={`m-12 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400 ${style.sharkAnimation}`}>
     
          <Image
            src={"/images/logos_4.0/MarinaHacks_4.0_Logo.png"}
            alt='wiclogo'
            width="400"
            height="100"
          />
        </div>
        <div className="flex flex-col justify-center ">
          <h2 className="text-3xl font-bold leading-[60px] text-[#45494C] text-center mb-8"> Contact Information</h2>

          <div className="flex flex-row gap-4 justify-center">
            
            <a href="https://www.instagram.com/csulbwic/?hl=en" target='_blank'>
              <button><FaInstagram className="h-[60px] w-[80px]  text-[#FDBBD9] hover:text-[#F26EAC]" /></button>
            </a>
            <a href="mailto:csulbwic@gmail.com" target='_blank'>
              <button><FaEnvelope className="h-[60px] w-[80px]  text-[#FDBBD9] hover:text-[#F26EAC] " /></button>
            </a>
            <a href="https://www.linkedin.com/company/csulbwic/" target='_blank'>
              <button><FaLinkedin className="h-[60px] w-[80px]  text-[#FDBBD9] hover:text-[#F26EAC]" /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}