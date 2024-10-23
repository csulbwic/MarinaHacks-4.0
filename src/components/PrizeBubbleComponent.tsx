

import React from 'react';

import styles from '../styles/prizeBubbleComponent.module.css'
// import "../styles/"
import Image from 'next/image';


type PrizeBubbleProps = {
    name: string;
    img: string;
}


export const PrizeBubbleComponent = ({name,img}: PrizeBubbleProps) => {
    return (
    <div className={`${styles.flexCol} ${styles.justifyCenter} ${styles.itemsCenter}`}>
        <div className={`${styles.Bubblecontainer}`}>
            <p className={`${styles.pDescription}`}>{name}</p>
            <div className={`${styles.dropBubble}`}>
                <Image src= {img} alt="prizeImg"
                    width="250"
                    height="250"
                />
            </div>
        </div>
        
    </div>

)};

