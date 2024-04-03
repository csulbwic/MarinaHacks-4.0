import style from '../styles/landing.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export const Landing = () => {
  return (
    <>
      <div className="h-screen w-full bg-blue-200 flex justify-center items-center">
        <Image
          src={"/images/landing_bg.png"}
          alt='background'
          width="7560"
          height="4904"
          className={style.bg}
        />
        <Image
          src={"/images/logo_long.png"}
          alt='logo'
          width="588"
          height="115"
          className={style.logo}
        />
        {/* <div className={style.wave}></div> */}
        <div className={style.learnmore}>
          <button className={style.text}>Learn More</button>
        </div>
        <div className="absolute bottom-[15%] left-[10%] flex column">
          <a href="https://www.facebook.com/wic.csulb/" target='_blank'>
            <FaFacebook className={style.icons} />
          </a>
          <a href="https://www.instagram.com/csulbwic/?hl=en" target='_blank'>
            <button><FaInstagram className={style.icons} /></button>
          </a>
          <a href="https://www.linkedin.com/company/csulbwic/" target='_blank'>
            <button><FaLinkedin className={style.icons} /></button>
          </a>
          <a href="https://twitter.com/csulbwic" target='_blank'>
            <button><FaTwitter className={style.icons} /></button>
          </a>
        </div>
      </div>
    </>
  )
}