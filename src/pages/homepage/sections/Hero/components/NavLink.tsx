import type { ReactNode } from "react";

type NavLinkProps = {
  children: ReactNode
}

function NavLink({children}: NavLinkProps) {
  return (
    <button className="text-sm sm:text-base md:text-xl font-[Bree_serif] text-[#FFFDF8] px-2 sm:px-6 lg:px-8">
      {children}
    </button>
  )
}

export default NavLink;