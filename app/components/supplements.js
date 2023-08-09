import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Supplements() {
  return(
    <>
      <div className="w-screen flex bg-gray-950 sm:flex-col">
        <div className="w-screen flex flex-col items-center justify-around bg-black sm:flex sm:flex-row px-10">
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full " src="/assets/images/hi-tech-pharma.webp" width={500} height={500}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/Nutrex.webp" width={500} height={500}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/nutricost.png" width={500} height={500}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full invert" src="/assets/images/purely-inspired.webp" width={500} height={500}/> </span></Link>
          </div>
        </div>
        <div className="w-screen flex flex-col items-center justify-around bg-black sm:flex sm:flex-row px-10">
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/muscle-meds.webp" width={500} height={500}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full invert" src="/assets/images/Muscletech.png" width={500} height={500}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/Natrol.webp" width={500} height={500}/> </span></Link>
          </div>
          <div className="w-full sm:w-1/4">
            <Link className="" href="/"> <span className="w-auto h-auto"> <Image className="w-full" src="/assets/images/universal.png" width={500} height={500}/> </span></Link>
          </div>
        </div>
      </div>
      
    </>
  )
}