import Hero from "./sections/Hero/Hero";
import Menu from "./sections/Menu/Menu";
import Event from "./sections/Events/Event";
import Contact from "./sections/Contant/Contact";

function Homepage() {
  return (
    <main className="h-screen w-screen relative ">
      <Hero />
      <Menu />
      <Event />
      <Contact />
    </main>
  )
}

export default Homepage;