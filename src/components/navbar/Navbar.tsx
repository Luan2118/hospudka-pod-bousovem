import { Link, useLocation } from "react-router";
import hospudkaLogo from "../../assets/images/hospudka-logo.png"
import NavLink from "./components/Navlink";

function Navbar() {

  const { pathname } = useLocation(); 

  const isNotHomepage = pathname !== '/'

  return (
    <nav className={`flex justify-between items-center  xxs:px-4 relative z-20 w-full py-1 ${isNotHomepage && 'bg-[#403A35]/90 backdrop-blur-md '}`}>
      <Link to='/#hero' className="flex items-center gap-2">
        <img src={hospudkaLogo} alt="Logo hospody" className="w-[60px] h-[60px] " />
        <p className="text-[#FFFDF8]  font-[Bree_serif]">Hospůdka
pod Boušovem</p>
      </Link>

      <div className="flex gap-6 ">

        <NavLink link='hero'>Úvod</NavLink>
        <NavLink link='/nas-pribeh'>Náš příběh</NavLink>
        <NavLink link='menu'>Menu</NavLink>
        <NavLink link='/galerie'>Galerie</NavLink>
        <NavLink link='kontakt'>Kontakt</NavLink>
      </div>

    </nav>
  )
}

export default Navbar;