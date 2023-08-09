import React from "react";
import Image from "next/image";

export default function Public() {
  return(
    <>
      <div className="w-screen h-auto flex flex-col sm:flex-row  lg:h-5/6">
        <div className="w-full bg-amber-500">
          <div className="w-full h-auto">
            <Image className="w-full" src="/assets/images/SV---Banners-03.jpg" width={500} height={500}/>
          </div>
          <div className="w-3/5 relative bottom-12 left-1/4 sm:left-1/3 sm:bottom-20 sm:w-1/3 lg:bottom-28 xl:bottom-40">
            <button className="w-full h-8 bg-black text-white text-lg font-semibold hover:bg-slate-300 hover:text-black sm:h-12">COMPRAR</button>
          </div>
        </div>
        <div className="w-full bg-black">
          <div className="w-full h-auto">
            <Image className="w-full" src="/assets/images/SV---Banners-04.jpg" width={500} height={500}/>
          </div>
          <div className="w-3/5 relative bottom-12 left-1/4 sm:left-1/3 sm:bottom-20 sm:w-1/3 lg:bottom-28 xl:bottom-40">
            <button className="w-full h-8 bg-white text-black text-lg font-semibold hover:bg-slate-300 hover:text-black sm:h-12">COMPRAR</button>
          </div>
        </div>
      </div>
    </>
  )
}