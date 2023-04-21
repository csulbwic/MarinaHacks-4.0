import style from '../styles/landing.module.css'
import Image from 'next/image'
import Link from 'next/link';
import {FaTwitter, FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa"

const Landing = () => {
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
                <div className="absolute bottom-44 left-32 flex column">
                    <Link href={"https://www.facebook.com/wic.csulb/"}>
                        <button><FaFacebook className={style.icons}/></button>
                    </Link>
                    <Link href={"https://www.instagram.com/csulbwic/?hl=en"}>
                        <button><FaInstagram className={style.icons}/></button>
                    </Link>
                    <Link href={"https://www.linkedin.com/company/csulbwic/"}>
                        <button><FaLinkedin className={style.icons}/></button>
                    </Link>
                    <Link href={"https://twitter.com/csulbwic"}>
                        <button><FaTwitter className={style.icons}/></button>
                    </Link>
                </div>
                <div className={style.wave}></div>
                
            </div>
        </>
    );
}

export default Landing;