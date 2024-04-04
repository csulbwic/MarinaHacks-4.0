// import style from '../styles/landing.module.css'
// import Image from 'next/image'
// import Link from 'next/link';
// import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import React, {useState} from 'react'
// export const Landing = () => {
//   return (
//     <>
//       <div className="h-screen w-full bg-blue-200 flex justify-center items-center">
//         <Image
//           src={"/images/background.jpg"}
//           alt='background'
//           width="7560"
//           height="4904"
//           className={style.bg}
//         />
//         <Image
//           src={"/images/logo_long.png"}
//           alt='logo'
//           width="588"
//           height="115"
//           className={style.logo}
//         />
//         {/* <div className={style.wave}></div> */}
//         <div className={style.learnmore}>
//           <button className={style.text}>Learn More</button>
//         </div>
//         <div className="absolute bottom-[15%] left-[10%] flex column">
//           <a href="https://www.facebook.com/wic.csulb/" target='_blank'>
//             <FaFacebook className={style.icons} />
//           </a>
//           <a href="https://www.instagram.com/csulbwic/?hl=en" target='_blank'>
//             <button><FaInstagram className={style.icons} /></button>
//           </a>
//           <a href="https://www.linkedin.com/company/csulbwic/" target='_blank'>
//             <button><FaLinkedin className={style.icons} /></button>
//           </a>
//           <a href="https://twitter.com/csulbwic" target='_blank'>
//             <button><FaTwitter className={style.icons} /></button>
//           </a>
//         </div>
//       </div>
//     </>
//   )
// }

import Image from 'next/image'
import style from '../styles/landing.module.css'

export const Landing = () => {
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const [AnimationClass,setAnimationClass] = useState("");
  const toggleChatBubble = () => {
    setShowChatBubble(!showChatBubble);
};

  
  return (
    <>
    <div className='container'>
      
        <Image 
          src={"/images/without_shark__dark_lines.png"}
          alt='background'
          width="7560"
          height="4904"
          className={style.bg} 
        />
        {/* <div  
          onScroll={(e) => {
          const { scrollOn, scrollHeight, clientHeight } = e.target;
          const position = Math.ceil(
            (scrollOn / (scrollHeight - clientHeight)) * 100
          );
          console.log(position)}}
        >
        </div> */}

        <Image
          src={"/images/output-onlinepngtools.png"}
          alt='shine'
          width="7560"
          height="0"
          className={style.logo} />

        <Image 
        src={"/images/foreground.png"}
        alt='forground'
        width="7560"
        height="0"
        className={style.foreground}
        />
      <div className={style.mediumbtn}
          onMouseEnter={() => {setShowChatBubble(true); 
            console.log(showChatBubble)}}  // Show chat bubble when mouse enters container
          onMouseLeave={() => setShowChatBubble(false)} // Hide chat bubble when mouse leaves container
      >
      <Image 
        src={"/images/simplified.png"}
        alt='Shark_bubble'
        width="1000"
        height="1500"
        className={style.bubble}
        // className="responsive h-full w-full object-cover"
        priority= {false}/>

        <Image 
          src={"/images/MH-3.5-Logo.png"}
          alt='background'
          width="600"
          height="0"
          className={style.logoo} 
          />

        {showChatBubble && (
          <div className={"absolute top-0 right-0 " + style.chatbubble}>
              <Image src="/images/bubble.png" alt="Shark bubble" width="500" height="150"  />
          </div>
      )}

<Image 
          src={"/images/WiC-logo-black.png"}
          alt='background'
          width="200"
          height="0"
          className={style.clublogo} 
          />  
        </div>
        </div>
    </>
  )
  }