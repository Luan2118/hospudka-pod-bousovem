import { Link } from "react-router";
import hospudkaLogo from "../../assets/images/hospudka-logo.png"
import NavLink from "./components/Navlink";

function Navbar() {
  return (
    <nav className=" flex justify-between items-center  xxs:px-4 fixed z-20 w-full bg-[#292522]/60 backdrop-blur-md ">
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