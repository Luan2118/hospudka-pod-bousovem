import Hero from "./sections/Hero/Hero";
import Menu from "./sections/Menu/Menu";
import Event from "./sections/Events/Event";

function Homepage() {
  return (
    <main className="h-screen w-screen relative ">
      <Hero />
      <Menu />
      <Event />
    </main>
  )
}

export default Homepage;