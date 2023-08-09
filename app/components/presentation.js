import React from "react";
import Image from "next/image";

export default function Presentation() {
  return(
    <>
      <div className="w-screen flex bg-black mt-24">
        <div className="w-full">
          <Image className="w-full" src="/assets/images/SV_Banners_02.jpg" width={500} height={500}/>
        </div>
      </div>
    </>
  )
}