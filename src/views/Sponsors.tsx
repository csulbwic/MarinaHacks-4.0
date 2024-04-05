import Image from 'next/image'
import style from '@/styles/sponsor.module.css'

export const Sponsors = () => {
  return (
    <div id="sponsors"  className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold text-[#0F516F] mt-20 mb-2 pb-10 pt-20">
        Sponsors
      </h1>


      <div className={`${style.container}  flex flex-row flex-wrap justify-center items-center gap-6 pb-6`}>

        <div className="rounded-2xl p-20">
          <Image
            src = {"/images/sponsors/coe_transparent_logo.png"}
            alt = 'background'
            width={300}
            height={300}
          />
        </div>

        <div className="rounded-2xl p-20">
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