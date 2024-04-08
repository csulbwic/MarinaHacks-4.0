import { useEffect, useState } from "react";
import { Layout } from "@/components";
import style from '../styles/landing.module.css'
import Image from 'next/image'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Cookies from 'js-cookie'
import { NavBar } from "@/components";

const overlayCookieName = "overlayDismissed"

export const OverlayLayout = ({ children}: any) => {
  const [showOverlay, setShowOverlay] = useState(false)

  const handleDismiss = () => {
    setShowOverlay(false);
    Cookies.set(overlayCookieName, "false", { expires: 7 })
  }

  useEffect(() => {
    const cookieValue = Cookies.get(overlayCookieName)
    if (cookieValue === "false") {
      setShowOverlay(false)
    }
  }, [])

  return (
    <>
      <NavBar showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
      {showOverlay && (
        <div className="h-screen w-full bg-blue-200 flex justify-center items-center" >
        {/*<Image
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
          <button onClick={handleDismiss} className={style.text}>Learn More</button>
        </div>
        <div className="absolute bottom-[20%] left-[10%] flex column">
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
      )}
      <Layout showOverlay={showOverlay} setShowOverlay={setShowOverlay}>{children}</Layout>
    </>
  )
}
