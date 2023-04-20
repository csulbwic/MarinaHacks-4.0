import style from '../styles/landing.module.css'
import Image from 'next/image'

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
                <div className={style.wave}></div>
            </div>
        </>
    );
}

export default Landing;