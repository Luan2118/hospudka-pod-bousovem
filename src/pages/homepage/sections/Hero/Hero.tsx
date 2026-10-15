
import hospudkaFrontView from "../../../../assets/images/front-view-1.png"
import whiteArrow from "../../../../assets/icons/whiteArrow.png"
import { motion } from "motion/react";

function Hero() {
  return (
    <section id="hero" className="flex flex-col min-h-svh ">
      <img src={hospudkaFrontView} alt="Hospůdka pod Boušovem" className="h-screen w-screen object-cover  absolute inset-0" />


      <div className="absolute inset-0 bg-gradient-to-r from-[#171512]/50  to-[#171512]/30" />

      <div className="z-10 absolute font-[Bree_serif] top-1/2 -translate-y-1/2 px-6  xxs:px-[clamp(1rem,12vw,12.5rem)] flex flex-col  ">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-[#D9A441] tracking-[.4em] text-[clamp(0.8rem,2vw,1.25rem)]">
          VÍTEJTE U NÁS
        </motion.p>


        <h1
          className="text-[#FFFDF8] text-[clamp(2.5rem,8vw,4.5rem)] flex flex-col gap-2 leading-none">
          <span className=" block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
              className="block"
            >
              Hospůdka
            </motion.span>
          </span>

          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="block"
            >
              pod Boušovem

            </motion.span>
          </span>
        </h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5,delay: 0.4 , ease: "easeOut" }}
          className="text-[#FFFDF8]/70 text-[clamp(0.8rem,2vw,1.1rem)] mt-5 max-w-[500px]">
          Poctivé pivo, příjemné posezení a místo, kde se budete cítit jako doma</motion.p>
      </div>


      <motion.div 
        animate={{y: [0, 6, 0]}}
        transition={{duration: 1, repeat: Infinity, ease:"easeInOut"}}
      className="absolute bottom-8 w-full flex  justify-center">
        <a className="p-2 rounded-[50%] bg-white/10 backdrop-blur-md" href="#menu">
          <img src={whiteArrow} alt="" className="w-[25px] h-[25px]" />
        </a>
      </motion.div>

    </section>
  )
}


export default Hero;