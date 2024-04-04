import Image from 'next/image'
import style from '../styles/sponsor.module.css'
 


export const Sponsors = () => {
  return (
    <div id="sponsors"  className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-black opacity-50 mt-20 mb-12">
        Sponsors
      </h1>
      <div className={`${style.container}  flex flex-row flex-wrap justify-center items-center gap-6 pb-6`}>

        <div className="rounded-2xl p-12 ">
          <Image
            src = {"/images/sponsors/coe_logo.jpg"}
            alt = 'background'
            width={200}
            height={200}
          />
        </div>

        <div className="rounded-2xl p-12 ">
          <Image
            src = {"/images/sponsors/acm_logo1.png"}
            alt = 'background'
            width={200}
            height={200}
          />
        </div>

        
      </div>
    </div>
  )
}