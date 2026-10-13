import hospudkaLogo from "../../assets/images/hospudka-logo.png"
import NavLink from "./components/Navlink";

function Navbar() {
  return (
    <nav className=" flex justify-between items-center  xxs:px-4 fixed z-10 w-full">
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
  )
}

export default Navbar;