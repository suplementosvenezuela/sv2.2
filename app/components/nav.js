'use client'
import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import "./styles_modules/nav_style.css"


export default function Nav(){

  const [isOpen, setIsOpen] = useState(false)
  const [isSubOpen, setIsSubOpen] = useState(false)

  return(
    
    <>
      <nav className="bg-black fixed w-screen z-50">
        <div className=" w-screen-xl flex flex-row items-center justify-between mx-5 p-1">
          <div className={`lg:hidden nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Link className=" w-24 " href="/"> <span className="w-auto h-auto"> <Image className=" w-full relative hover:-right-2" src="/assets/images/sv - logo con fondo negro.png" width={500} height={5} /> </span></Link>
          <div className={`nav_items absolute left-0 top-20 pt-4 bg-black w-screen h-screen lg:pt-0 lg:top-0 lg:relative lg:h-auto lg:block lg:w-auto z-50 ${isOpen && "open"}`}>
            <ul className=" font-medium flex flex-col p-4 mt-4  rounded-lg bg-black lg:p-0 lg:flex-row lg:space-x-8 md:mt-0 lg:border-0 ">
              <li className="mt-10 lg:mt-0">
                <Link className="text-sm text-white hover:text-amber-400" href="/"> MARCAS </Link>
              </li>
              <li className="mt-10 lg:mt-0">
                <Link className="text-sm w-44 flex text-white hover:text-amber-400 justify-between" href="#" onClick={() => setIsSubOpen(!isSubOpen)}> SUPLEMENTOS 
                    <span > <Image className={` w-2 h-4 invert ${isSubOpen && "subOpen"}`} src="/assets/images/arrow.ico" width={10} height={10} /></span>
                </Link>
                <div className={` subnav_items ${isSubOpen && "subOpen"}`}>
                  <ul className="subnav">
                    <li className=" flex">
                      <Link className=" texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> AMINOACIDOS </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_aminoacidos_2.png" width={100} height={100} />
                    </li>
                    <li className=" flex">
                      <Link className="texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> COOPER </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_cooper_2.png" width={100} height={100} />
                    </li>
                    <li className=" flex">
                      <Link className="texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> CREADORES DE PESO </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_creadores_de_peso.png" width={100} height={100} />
                    </li>
                    <li className=" flex">
                      <Link className="texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> CREATINAS </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_creatinas.png" width={100} height={100} />
                    </li>
                    <li className=" flex">
                      <Link className="texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> PRECURSORES DE TESTOSTERONA </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_precursores_de_testosterona.png" width={100} height={100} />
                    </li>
                    <li className=" flex">
                      <Link className="texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> PROTEÍNAS </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_proteinas.png" width={100} height={100} />
                    </li>
                    <li className=" flex">
                      <Link className="texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> QUEMADORES DE GRASA </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_quemadores_de_grasa.png" width={100} height={100} />
                    </li>
                    <li className=" flex">
                      <Link className="texto w-1/2 ml-10 text-sm text-white hover:text-amber-400 " href="/productos" target="_blank"> SARS </Link>
                      <Image className=" img w-40 " src="/assets/images/SV_PRODUCTOS_sars.png" width={100} height={100} />
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mt-10 lg:mt-0">
                <Link className="text-sm text-white hover:text-amber-400 " href="/"> OBJETIVOS </Link>
              </li>
              <li className="mt-10 lg:mt-0">
                <Link className=" text-sm text-white hover:text-amber-400 " href="/"> BLOG </Link>
              </li>
              <li className=" flex mt-10 lg:mt-0">
                <Link className=" mx-1 m-0 lg:w-auto " href="https://www.facebook.com/suplementovenezuela" target="_blank"> <span className="w-auto h-auto"> <Image className=" w-6 h-6 rounded-full  hover:w-7 hover:h-7" src="/assets/images/facebook-icon.ico" width={5} height={5} /> </span> </Link>
                <Link className=" mx-1 m-0 lg:w-auto " href="https://www.instagram.com/suplementosvenezuelaoficial/" target="_blank"> <span className="w-auto h-auto"> <Image className=" w-6 h-6 rounded-full  hover:w-7 hover:h-7" src="/assets/images/instagram-icon.ico" width={5} height={5} /> </span> </Link>
                <Link className=" mx-1 m-0 lg:w-auto " href="https://www.youtube.com/@suplementosvenezuela5294" target="_blank"> <span className="w-auto h-auto"> <Image className=" w-6 h-6 rounded-full  hover:w-7 hover:h-7" src="/assets/images/youtube-icon.ico" width={5} height={5} /> </span> </Link>
              </li>
            </ul>
          </div>
          <div className="flex mt-4">
            <Link className=" px-1 m-0  w-8 h-8 rounded-full hover:bg-slate-300 " href="/login" target="_blank"> <span className="w-auto h-auto"> <Image className=" w-6 h-6 invert" src="/assets/images/user-icon.ico" width={5} height={5} /> </span> </Link>
            <Link className=" px-1 m-0  w-16 relative -top-2" href="/"> <span className="w-auto h-auto"> <Image className=" w-10 h-10 invert" src="/assets/images/shop-icon.ico" width={5} height={5} /> </span> </Link>
          </div>
        </div>
      </nav>
    </>
  )
}