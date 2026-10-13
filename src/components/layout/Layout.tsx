import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Contact from "../Contact/Contact";
import { useLocation } from "react-router";
import { useEffect } from "react";

function Layout() {

  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }, [hash, pathname]);

  return (
    <div className="h-screen w-screen relative ">

      <Navbar />

      <main>
        <Outlet />
      </main>
      <Contact />

    </div>
  )
}

export default Layout;