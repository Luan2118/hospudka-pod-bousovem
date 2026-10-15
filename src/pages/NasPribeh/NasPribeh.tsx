import hospodaZacatek1 from "../../assets/images/hospoda-zacatek-1.png";
import hospodaZacatek2 from "../../assets/images/hospoda-zacatek-2.png";
import hospodaZacatek3 from "../../assets/images/hospoda-zacatek-3.png";
import StorySection from "./components/StorySection";
import { motion } from "motion/react";

function NasPribeh() {
  return (
    <div id="nas-pribeh" className="flex flex-col font-[Bree_serif] text-[#2B241F] bg-[#F5F0E6] pb-15  pt-[100px] px-5 sm:px-10 gap-10  xl:px-30 2xl:px-60">

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl">
            Náš příběh
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
            className="text-[#2B241F]/70 text-center text-sm">
            Od rodinného domu až po hospůdku, kterou dnes znáte.
          </motion.p>
        </div>

      </div>

      <div>
        <StorySection
          title="Všechno začalo jedním domem"
          description="V roce
              jejím vlastnictví zůstal až do roku 1981, kdy byl prodán chalupářům z Prahy.
              Dům tehdy nebyl v nejlepším stavu, a tak jsme stáli před zásadním rozhodnutím – zbourat ho, nebo mu dát nový smysl?
              Odpověď přišla nečekaně během pandemie covidu. Všimli jsme si, kolik lidí prochází naší vesnicí při výletech do lesa a okolí. Právě tehdy se zrodila myšlenka vytvořit zde malé občerstvení, kde by se kolemjdoucí mohli zastavit a odpočinout si."
          image={hospodaZacatek1} />


        <StorySection
          title="Od nápadu ke skutečnosti"
          description="Nechali jsme zpracovat projekt a v březnu roku 2020 se pustili do rekonstrukce. Z původního domu nakonec zůstaly pouze obvodové stěny a střecha. Už na podzim téhož roku však byla rekonstrukce dokončena.
              Následující tři roky jsme se zde o víkendech scházeli s kamarády, kteří nás od samého začátku podporovali.
              9. června 2023 jsme po získání všech potřebných povolení konečně oficiálně otevřeli Hospůdku pod Boušovem."
          image={hospodaZacatek2} />

        <StorySection
          title="Hospůdka dnes"
          description="Nechali jsme zpracovat projekt a v březnu roku 2020 se pustili do rekonstrukce. Z původního domu nakonec zůstaly pouze obvodové stěny a střecha. Už na podzim téhož roku však byla rekonstrukce dokončena.
              Následující tři roky jsme se zde o víkendech scházeli s kamarády, kteří nás od samého začátku podporovali.
              9. června 2023 jsme po získání všech potřebných povolení konečně oficiálně otevřeli Hospůdku pod Boušovem."
          image={hospodaZacatek3} />

      </div>


    </div>
  )
}

export default NasPribeh;