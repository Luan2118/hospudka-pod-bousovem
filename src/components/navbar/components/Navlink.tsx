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
    `font-[Bree_serif] text-[#FFFDF8] px-2 sm:px-6 `;


  function scrollToTop() {
    window.scrollTo(0, 0)
  }


  if (pathname !== '/' && link === 'menu' || link === 'hero') {
    return (
      <a href={`/#${link}`} className={className}>
        {children}
      </a>
    )
  }

  if (isHomeSection) {
    return (
      <a href={`#${link}`} className={className}>
        {children}
      </a>
    );
  }



  return (
    <Link to={link} className={className} onClick={scrollToTop}>
      {children}
    </Link>
  );
}
export default NavLink;