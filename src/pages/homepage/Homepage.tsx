import Hero from "./sections/Hero/Hero";
import Menu from "./sections/Menu/Menu";
import Event from "./sections/Event/Event";
import Seo from "../../components/Seo/Seo";

function Homepage() {
  return (
    <>
      <Seo
        title="Hospůdka pod Boušovem | Hospoda ve Všekarech"
        description="Hospůdka pod Boušovem ve Všekarech nabízí poctivé pivo, příjemné posezení a domácí atmosféru. Prohlédněte si náš jídelní lístek, galerii a aktuální akce."
      />
      <Hero />
      <Menu />
      <Event />
    </>
  )
}

export default Homepage;
