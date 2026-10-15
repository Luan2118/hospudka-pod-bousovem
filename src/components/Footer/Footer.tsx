import { useLocation } from "react-router";

function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className={`border border-l-0 border-r-0 border-b-0 text-center py-4 text-xs font-[Bree_serif] ${pathname !== '/' ? 'bg-[#38271F] text-[#FFFDF8] border-[#FFFDF8]/60' : 'bg-[#F5F0E6] text-[#2B241F] border-[#2B241F]/30'}`}>
      © Copyright 2026 Hospůdka pod Boušovem
    </footer>
  )
}

export default Footer;