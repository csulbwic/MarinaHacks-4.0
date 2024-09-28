import style from '../styles/contact.module.css';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="contact" className={`flex flex-col justify-center items-center ${style.contactContainer}`}>
      <h1 className="text-6xl text-center font-bold text-[#F26EAC] mb-6">
        Women in Computing at CSULB
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className={`m-6 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400 ${style.sharkAnimation}`}>
          <Image
            src={"/images/logos_4.0/MarinaHacks_4.0_Logo.png"}
            alt="wiclogo"
            layout="responsive"
            width={400}
            height={100}
            className="max-w-full h-auto" // Ensures the image scales down on smaller screens
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold leading-[50px] text-[#45494C] mb-6">Contact Information</h2>

          <div className="flex flex-row gap-4 justify-center flex-wrap">
            <a href="https://www.instagram.com/csulbwic/?hl=en" target="_blank">
              <FaInstagram className="h-10 w-10 md:h-[60px] md:w-[80px] text-[#FDBBD9] hover:text-[#F26EAC]" />
            </a>
            <a href="mailto:csulbwic@gmail.com" target="_blank">
              <FaEnvelope className="h-10 w-10 md:h-[60px] md:w-[80px] text-[#FDBBD9] hover:text-[#F26EAC]" />
            </a>
            <a href="https://www.linkedin.com/company/csulbwic/" target="_blank">
              <FaLinkedin className="h-10 w-10 md:h-[60px] md:w-[80px] text-[#FDBBD9] hover:text-[#F26EAC]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
