import React from "react";

export default  function Footer() {
  return(
    <>
      <div className="w-screen h-auto bg-black flex flex-col">
        <div className="w-screen flex flex-col lg:flex lg:flex-row">
          <div className=" w-full lg:w-1/3 p-5">
            <h2 className="text-white/95"> Descripción: </h2>
            <p className=" text-white/60">"Nutrición Deportiva, todo para el deportista. proteínas, creatina, aminoácidos, esteroides, whey Protein, quemadores de Grasas, Mesoestetic, Cooper Pharma, l carnitine, winstrol. Pérdida de peso,."</p>
          </div>
          <div className=" w-full lg:w-1/3 p-5">
            <h2 className="text-white/95"> Opciones de servicio:  </h2>
            <p className=" text-white/60">Compras en tienda · Retiros en la puerta · Entrega a domicilio</p>
          </div>
          <div className=" w-full lg:w-1/3 p-5">
            <h2 className="text-white/95"> Dirección:  </h2>
            <p className=" text-white/60 mb-2">(corta) Edificio Mar, Avenida Francisco de Miranda, Caracas 1060, Miranda</p>
            <p className=" text-white/60">(larga) AV. Fco Miranda Edif Mar, Mz-1 ofic-1, al lado del Ministerio de Vivienda MINHVI antiguo INAVI y Farmacia GALEM. tocar el único Intercomunicador con cámara. Pto de ref. Farmatodo de Chacao, Ccs. </p>
          </div>
        </div>
        <div className=" w-screen p-5">
          <h2 className="text-white/95 text-xl font-semibold"> Sobre Nosotros  </h2>
          <p className=" text-white/60 text-lg">© Suplementos Venezuela, <i className="text-white/60 text-sm">Todos los derechos reservados.</i> Empresa de importación directa que trabaja en conjunto con los distribuidores de las mejores marcas americanas y canadienses.</p>
        </div>
      </div>
    </>
  )
}