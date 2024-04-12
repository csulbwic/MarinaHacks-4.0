import React, {useState} from 'react'
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
    <div className='container pb-30px'>
        <div className={style.bgRounded}>
        <Image 
          src={"/images/MarinaHacks_3.5_Landing.png"}
          alt='background'
          width="7560"
          height="4904"
          className={style.bg} 
        />
        </div>
        {/* <div  
          onScroll={(e) => {
          const { scrollOn, scrollHeight, clientHeight } = e.target;
          const position = Math.ceil(
            (scrollOn / (scrollHeight - clientHeight)) * 100
          );
          console.log(position)}}
        >
        </div> */}

      <div className={style.mediumbtn}
          onMouseEnter={() => {setShowChatBubble(true); 
            console.log(showChatBubble)}}  // Show chat bubble when mouse enters container
          onMouseLeave={() => setShowChatBubble(false)} // Hide chat bubble when mouse leaves container
      >
      {/*  <Image 
        src={"/images/simplified.png"}
        alt='Shark_bubble'
        width="1000"
        height="1500"
        className={style.bubble}
        // className="responsive h-full w-full object-cover"
        priority= {false}/>

        {/* <Image 
          src={"/images/MarinaHacks_3.5_Landing_Logo.png"}
          alt='background'
          width="600"
          height="0"
          className={style.logoo} 
          /> */}

        {showChatBubble && (
          <div className={"absolute top-0 right-0 " + style.chatbubble}>
              <Image src="/images/bubble.png" alt="Shark bubble" width="500" height="150"  />
          </div>
      )}

<Image 
          src={"/images/wic_logo_white.png"}
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