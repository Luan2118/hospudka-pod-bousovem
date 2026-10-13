import type { ReactNode } from "react";
import { Link } from "react-router";

type NavLinkProps = {
  children: ReactNode
  link: 'menu' | 'galerie' | 'kontakt' | 'nas-pribeh'
}

function NavLink({ children, link }: NavLinkProps) {
  return (
    <Link to={`/${link}`} className="text-sm sm:text-base md:text-xl font-[Bree_serif] text-[#FFFDF8] px-2 sm:px-6 lg:px-8">
      {children}
    </Link>
  )
}

export default NavLink;