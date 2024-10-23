

import React from 'react';

import styles from "../../styles/PrizeBubbleComponent.module.css"
// import "../styles/"
import Image from 'next/image';


type PrizeBubbleProps = {
    name: string;
    img: string;
}


export const PrizeBubbleComponent = ({name,img}: PrizeBubbleProps) => (
    <div className="flex-col justify-center items-center">
        <div className={`${styles.Bubblecontainer} gap-10`}>
            <p className={`${styles.pDescription}`}>{name}</p>
            <div className={`${styles.dropBubble}`}>
                <Image src= {img} alt="prizeImg"
                    width={250}
                    height={250}
                />
            </div>
        </div>
        
    </div>

);

