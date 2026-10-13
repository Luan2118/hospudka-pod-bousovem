
import hospudkaFrontView from "../../../../assets/images/front-view-1.png"
import hospudkaLogo from "../../../../assets/images/hospudka-logo.png"
import whiteArrow from "../../../../assets/icons/whiteArrow.png"
import NavLink from "./components/NavLink";

function Hero() {
  return (
    <section id="hero" className="flex flex-col min-h-svh">
      <img src={hospudkaFrontView} alt="Hospůdka pod Boušovem" className="h-screen w-screen object-cover  absolute inset-0" />



      <nav className=" flex justify-between items-center  xxs:px-4 sticky z-10">
        <a href="#hero">

          <img src={hospudkaLogo} alt="Logo hospody" className="w-[75px] h-[75px] sm:w-[115px] sm:h-[110px]" />
        </a>

        <div className="flex gap-6 ">

          <NavLink link='nas-pribeh'>Náš příběh</NavLink>
          <NavLink link='menu'>Menu</NavLink>
          <NavLink link='galerie'>Galerie</NavLink>
          <NavLink link='kontakt'>Kontakt</NavLink>

        </div>

      </nav>

      <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/50  to-[#171512]/30" />

      <div className="z-10 absolute font-[Bree_serif] top-1/2 -translate-y-1/2 px-6  xxs:px-[clamp(1rem,12vw,12.5rem)] flex flex-col  ">
        <p className="text-[#D9A441] tracking-[.4em] text-[clamp(0.8rem,2vw,1.25rem)]">VÍTEJTE U NÁS</p>

        <h1 className="text-[#FFFDF8] text-[clamp(2.5rem,8vw,4.5rem)] flex flex-col gap-2 leading-none">
          <span className="">Hospůdka</span>
          <span>pod Boušovem</span>
        </h1>

        <p className="text-[#FFFDF8]/70 text-[clamp(0.8rem,2vw,1.1rem)] mt-5 max-w-[500px]">
          Poctivé pivo, příjemné posezení a místo, kde se budete cítit jako doma</p>
      </div>


      <div className="absolute bottom-8 w-full flex  justify-center">
        <button className="p-3 rounded-[50%] bg-white/10 backdrop-blur-md">
          <img src={whiteArrow} alt="" className="w-[30px] h-[30px]" />
        </button>
      </div>

    </section>
  )
}


export default Hero;