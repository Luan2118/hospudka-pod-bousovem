import Hero from "./sections/Hero/Hero";
import Menu from "./sections/Menu/Menu";

function Homepage() {
  return (
    <main className="h-screen w-screen relative ">
      <Hero />
      <Menu />
    </main>
  )
}

export default Homepage;