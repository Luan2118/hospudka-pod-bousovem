import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";


type NavLinkProps = {
  children: ReactNode
  link: 'menu' | '/galerie' | 'kontakt' | '/nas-pribeh' | 'hero'
}

function NavLink({ children, link }: NavLinkProps) {

  const { pathname } = useLocation();


  const isHomeSection = link === "menu" || link === "kontakt" || link === "hero";

  const className =
    `flex flex-col group font-[Bree_serif] text-[#FFFDF8] px-2 sm:px-6`;


  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  const hrClassName = `w-full opacity-0 scale-x-0 origin-left group-hover:opacity-60   group-hover:scale-x-100 transition-transform duration-400 ease-out`

  if (pathname !== '/' && link === 'menu' || link === 'hero') {
    return (
      <div className={className}>
        <a href={`/#${link}`} >
          {children}
        </a>
        <hr className={hrClassName} />
      </div>
    )
  }

  if (isHomeSection) {
    return (
      <div className={className}>
        <a href={`#${link}`}>
          {children}
        </a>
        <hr className={hrClassName} />
      </div>

    );
  }

  return (
    <Link to={link} className={className} onClick={scrollToTop}>
      {children}
      <hr className={hrClassName} />
    </Link>
  );
}
export default NavLink;