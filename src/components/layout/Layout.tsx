import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Contact from "../Contact/Contact";

function Layout() {
  return (
    <>

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Contact />
    </>
  )
}

export default Layout;