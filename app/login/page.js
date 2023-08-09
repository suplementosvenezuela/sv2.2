import React from "react";

export default function Login() {
  return (
    <>
      <div className="w-screen h-screen bg-black flex flex-col lg:flex lg:flex-row">
        <div className=" w-full lg:w-1/2 h-1/2 lg:h-screen bg-amber-500 right">
          <section className="w-full h-4/5 lg:h-full pt-28 lg:pt-60 items-center justify-between mx-auto p-1">
            <h1 className=" text-center text-2xl lg:text-4xl mb-2 lg:mb-7">Login...</h1>
            <div className="flex flex-col w-4/5 lg:w-5/12 py-5 px-10 border-4 border-black rounded-lg mx-auto">
              <form className="sm:grid sm:gap-1 sm:grid-cols-2 lg:flex lg:flex-col"  method="POST" action="">
                <div className=" flex flex-col my-5">
                  <label className="text-sm lg:text-lg" for="email">Your Email</label>
                  <input className="rounded-lg w-full h-7" type="email" name="email" maxlength="100" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Debe indicar un correo válido" required/>
                </div>

                <div className="flex flex-col my-5">
                  <label className="text-sm lg:text-lg" for="Password">Password</label>
                  <input className="rounded-lg w-full h-7" type="Password" name="Password" maxlength="11" pattern="\([0-9]{3}) [0-9]{3}[ -][0-9]{4}" title="Debe indicar un telefono válido" required/>
                </div>
            
                <div className="flex flex-col my-5">
                  <button className=" bg-black w-full h-10 rounded-lg text-white hover:opacity-60" type="submit"><span>Sign in</span></button>
                </div>
              </form>
            </div>
          </section>
        </div>
        <div className=" w-full lg:w-1/2 h-1/2 lg:h-screen bg-black left">
          <section className="w-full h-4/5 lg:h-full pt-3 lg:pt-60 items-center justify-between mx-auto p-1">
            <h1 className=" text-center text-2xl lg:text-4xl mb-2 lg:mb-7 text-white">Register...</h1>
            <div className="flex flex-col w-4/5 lg:w-5/12 py-5 px-10 border-4 border-amber-500 rounded-lg mx-auto">
              <form className="sm:grid sm:gap-1 sm:grid-cols-2 lg:flex lg:flex-col" method="POST" action="">
                <div className="flex flex-col my-5">
                  <label className="text-white text-sm lg:text-lg" for="nombre">Nombre</label>
                  <input className="rounded-lg w-full h-7" type="text" name="nombre" maxlength="50" pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,23}" title="Debe indicar su nombre correctamente" required/>
                </div>
            
                <div className="flex flex-col my-5">
                  <label className="text-white text-sm lg:text-lg" for="email">Email</label>
                  <input className="rounded-lg w-full h-7" type="email" name="email" maxlength="100" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Debe indicar un correo válido" required/>
                </div>

                <div className="flex flex-col my-5">
                  <label className="text-white text-sm lg:text-lg" for="Password">Password</label>
                  <input className="rounded-lg w-full h-7" type="Password" name="Password" maxlength="11" pattern="\([0-9]{3}) [0-9]{3}[ -][0-9]{4}" title="Debe indicar un telefono válido" required/>
                </div>

                <div className="flex flex-col my-5">
                  <label className="text-white text-sm lg:text-lg" for="Password">Confirmar Password</label>
                  <input className="rounded-lg w-full h-7" type="Password" name="Password" maxlength="11" pattern="\([0-9]{3}) [0-9]{3}[ -][0-9]{4}" title="Debe indicar un telefono válido" required/>
                </div>
            
                <div className="flex flex-col my-5">
                  <button className="bg-amber-500 w-full h-10 rounded-lg hover:opacity-60" type="submit"><span>Registrar</span></button>
                </div>
            
              </form>
            </div>
          </section>
        </div>
   
      </div>
    </>
  )
}