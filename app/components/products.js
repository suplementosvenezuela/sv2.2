import React from "react";
import Image from "next/image";


export default function Products() {
  return(
    <>
      <div className="w-screen flex flex-col bg-black sm:flex-row">
          <div className="w-full">
            <div className="w-full">
              <Image className="w-full" src="/assets/images/SV---Banners-05.jpg" width={500} height={500}/>
            </div>
            <div className="relative bottom-12 left-1/3 sm:bottom-24 xl:left-2/5 xl:bottom-36 w-1/3">
              <button className="w-full h-8 bg-black text-white text-lg font-semibold hover:bg-slate-300 hover:text-black sm:w-72 sm:h-12">COMPRAR</button>
            </div>
          </div>
      </div> 
    </>
  )
}