'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles_modules/categories_style.css"; 
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    image:"/assets/images/SV_PRODUCTOS_aminoacidos_2.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20AMINOACIDOS",
    text:"AMINOACIDOS"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_cooper_2.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20COOPER",
    text:"COOPER"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_creadores_de_peso.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20CREADORES%20DE%20PESO",
    text:"CREADORES DE PESO"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_creatinas.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20CREATINAS",
    text:"CREATINAS"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_precursores_de_testosterona.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20PRECURSORES%20DE%20TESTOSTERONA",
    text:"PRECURSORES DE TESTOSTERONA"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_proteinas.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20PROTEÍNAS",
    text:"PROTEÍNAS"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_quemadores_de_grasa.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20QUEMADORES%20DE%20GRASA",
    text:"QUEMADORES DE GRASA"
  },
  {
    image:"/assets/images/SV_PRODUCTOS_sars.png",
    link:"https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información%20de%20SARS",
    text:"SARS"
  },
]


export default class Categories extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
      };
      return (
        <div className=" w-screen h-screen bg-black">
          <h2 className=" text-2xl font-semibold text-center my-10 text-white"> CATEGORIAS</h2>
          <div className=" w-7/12 h-auto sm:w-1/2 mx-auto bg-black">
            <Slider {...settings}>
            {
             cards.map((card, index) => {
                return(
                <div key={index} className="flex flex-col w-1/2 py-5 px-5 border-black mx-auto cardV cardH border-4 2 lg:flex-row  hover:bg-gradient-to-b from-black to-amber-500">
                  <div className=" w-full mx-auto mb-5 lg:w-1/2 lg:m-0 lg:relative lg:left-1/2">
                    <Image className=" w-full " src={card.image} width={100} height={100} alt={card.text}/>
                  </div>
                  <div className="w-full mb-5 p-auto  lg:w-1/2 lg:relative lg:left-0 text-center lg:-top-60">
                    <Link className=" rounded-lg cursor-pointer text-white py-2 px-2 m-0 hover:text-black text-xl lg:text-3xl" href={card.link} target="_blank">{card.text}  </Link>
                  </div>
                </div>
                )
              })
            }
            </Slider>
          </div>
        </div>
      );
    }
  }