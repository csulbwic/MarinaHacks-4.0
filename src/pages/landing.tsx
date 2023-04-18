import style from '../styles/landing.module.css'
import Image from 'next/image'

const Landing = () => {
    return (
        <>
            <div className="h-screen w-full bg-blue-200 flex justify-center items-center">
                <Image
                    src={"/images/logo_long.png"}
                    alt='logo'
                    width="588"
                    height="115"/>
                <div className={style.bot}></div>
                <div className={style.middle}></div>
                <div className={style.top}></div>
                <div className={style.wave}></div>
            </div>
        </>
    );
}

export default Landing;