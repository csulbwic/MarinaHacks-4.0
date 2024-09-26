import Image from 'next/image'
import styles from "@/styles/prizes.module.css";

export const Prizes = () => {
  return (
    <div id="prizes" className={styles.prizesContainer}>
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-extrabold text-[#45494D] mt-20 mb-20 ">
          Prizes
        </h1>
      </div>
      {/* Container for the prize image */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/logos_4.0/3.png"
          alt="Prizes"
          width={450}
          height={450}
        />
      </div>
    </div>
  )
}