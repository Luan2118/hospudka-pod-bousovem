import Hero from "./sections/Hero/Hero";
import Menu from "./sections/Menu/Menu";
import Event from "./sections/Event/Event";
import Seo from "../../components/Seo/Seo";
import StructuredData from "../../components/StructuredData/StructuredData";
import { useOutletContext } from "react-router";
import type { LayoutContext } from "../../types/contact";

function Homepage() {
  const { contact, openingHoursState } = useOutletContext<LayoutContext>();

  return (
    <>
      <Seo
        title="Hospůdka pod Boušovem | Hospoda ve Všekarech"
        description="Hospůdka pod Boušovem ve Všekarech nabízí poctivé pivo, příjemné posezení a domácí atmosféru. Prohlédněte si náš jídelní lístek, galerii a aktuální akce."
      />
      <StructuredData contact={contact} openingHours={openingHoursState.openingHours} />
      <Hero />
      <Menu />
      <Event />
    </>
  )
}

export default Homepage;
