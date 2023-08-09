import Presentation from "./components/presentation"
import Products from "./components/products"
import Public from "./components/public"
import Supplements from "./components/supplements"
import Categories from "./components/categories"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <section className='flex flex-col bg-black'>
      <div className="w-1/3 h-12 bg-lime-500/75 rounded-r-lg fixed top-3/4 z-40 sm:w-36 hover:bg-white/50">
        <Link className="cursor-pointer" href="https://api.whatsapp.com/send?phone=584140124810&text=Solicitó%20información"><Image className="w-full h-full" src="/assets/images/whatsapp-icon.ico" width={300} height={200}/></Link>
      </div>
      <Presentation />
      <Supplements />
      <Public />
      <Products />
      <Categories />

    </section>
  )
}
