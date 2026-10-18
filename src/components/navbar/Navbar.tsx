import { Link, useLocation } from "react-router";
import hospudkaLogo from "../../assets/images/hospudka-logo.png"
import NavLink from "./components/Navlink";
import blackMenu from "../../assets/icons/black-menu.webp"
import closeMenu from "../../assets/icons/close-menu.webp"
import { useState, useEffect } from "react";
import facebook from "../../assets/icons/facebook-w.webp"
import { AnimatePresence, motion } from "motion/react";

type NavbarProps = {
  facebookUrl?: string | null;
};

function Navbar({ facebookUrl }: NavbarProps) {

  const { pathname } = useLocation();

  const isNotHomepage = pathname !== '/'

  const [menuClicked, setMenuClicked] = useState(false)

  function handleMenu() {
    setMenuClicked(prev => !prev)
  }


  useEffect(() => {
    if (menuClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuClicked]);

  return (

    <nav

      className={`flex justify-between items-center xxs:px-4 md:pr-6 absolute z-20 w-full py-1  ${isNotHomepage && 'bg-[#38271F]/85 h-[60px]'}`}>

      <AnimatePresence>
        {!menuClicked &&
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex justify-between items-center w-full lg:w-fit"
            >
              <Link to='/#hero' className="flex items-center gap-2">
                <img src={hospudkaLogo} alt="Logo hospody" className="w-[60px] h-[60px] " />
                <p className="text-[#FFFDF8]  font-[Bree_serif]">Hospůdka
                  pod Boušovem</p>
              </Link>


              <button className="px-2 xxs:px-0 cursor-pointer lg:hidden" onClick={handleMenu} >
                <img src={blackMenu} alt="Menu navigace" className="w-[40px] h-[40px] rounded-[50%] object-cover" />
              </button>
            </motion.div>

          </>
        }
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden lg:flex gap-8">
        <NavLink link='hero'>Úvod</NavLink>
        <NavLink link='/nas-pribeh'>Náš příběh</NavLink>
        <NavLink link='menu'>Menu</NavLink>
        <NavLink link='/galerie'>Galerie</NavLink>
        <NavLink link='kontakt'>Kontakt</NavLink>
      </motion.div>

      <AnimatePresence>
        {menuClicked &&
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="fixed inset-0 z-19 bg-[#000000]/15"></motion.div>

            <motion.div
              initial={{ opacity: 0.6, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.6, x: '100%' }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute flex flex-col justify-between bg-[#38271F]/30 backdrop-blur-lg top-0 right-0 h-screen z-20">
              <div>
                <div className="flex justify-between py-2 px-2 xxs:px-4 gap-10">
                  <Link to='/#hero' className="flex items-center gap-2">
                    <img src={hospudkaLogo} alt="Logo hospody" className="w-[50px] h-[50px] " />

                    <div className="text-[#FFFDF8]  font-[Bree_serif] flex flex-col">
                      <span>Hospůdka</span>
                      <span> pod Boušovem</span>
                    </div>

                  </Link>
                  <button className="cursor-pointer" onClick={handleMenu} >
                    <img src={closeMenu} alt="" className="w-[40px] h-[40px] rounded-[50%] object-cover" />
                  </button>
                </div>

                <div className="flex flex-col px-5 text-lg md:text-xl gap-6 mt-15" onClick={handleMenu}>
                  <NavLink link='hero' >Úvod</NavLink>
                  <hr className="text-[#FFFDF8]/40 w-[80%]" />
                  <NavLink link='/nas-pribeh' >Náš příběh</NavLink>
                  <hr className="text-[#FFFDF8]/40 w-[80%]" />

                  <NavLink link='menu'>Menu</NavLink>
                  <hr className="text-[#FFFDF8]/40 w-[80%]" />

                  <NavLink link='/galerie' >Galerie</NavLink>
                  <hr className="text-[#FFFDF8]/40 w-[80%]" />

                  <NavLink link='kontakt'>Kontakt</NavLink>
                </div>
              </div>

              {facebookUrl &&
                <div className="flex flex-col justify-center  gap-4 py-4">
                  <hr className="text-[#FFFDF8]/40 " />
                  <a href={facebookUrl} className="flex items-center justify-center border border-[#FFFDF8]/40 rounded-3xl gap-1 text-[#FFFDF8] mx-auto px-4 py-[3px] ">
                    <img src={facebook} alt="facebook" className="w-[30px] h-[30px]" />
                    <span className="w-[70px]">Facebook</span>
                  </a>
                </div>
              }

            </motion.div>
          </>
        }
      </AnimatePresence>


    </nav>
  )
}

export default Navbar;
