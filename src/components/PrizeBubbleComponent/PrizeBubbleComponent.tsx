

import React from 'react';
// import './PrizeBubbleComponent.css';
// import style from '../styles/landing.module.css';
import style from "../../styles/PrizeBubbleComponent.module.css"
import Image from 'next/image';

// import flower from "../../../public/images/flower.png"

type PrizeBubbleProps = {
    name: string;
    img: string;
}


export const PrizeBubbleComponent = ({name,img}: PrizeBubbleProps) => (
    <div className="wrapperBubbleContainer flex flex-col justify-center items-center">
        <div className={`${style.Bubblecontainer} gap-10`}>
            <p className={`${style.pDescription}`}>{name}</p>
            <div className={`${style.dropBubble}`}>
                <img src= {img} alt="prizeImg"
                    width={200}
                    height={200}
                />
            </div>
        </div>
        
    </div>

);

