import hospodaZacatek1 from "../../assets/images/hospoda-zacatek-1.png";
import hospodaZacatek2 from "../../assets/images/hospoda-zacatek-2.png";
import hospodaZacatek3 from "../../assets/images/hospoda-zacatek-3.png";
import StorySection from "./components/StorySection";

function NasPribeh() {
  return (
    <div id="nas-pribeh" className="flex flex-col font-[Bree_serif] text-[#2B241F] bg-[#F5F0E6] py-15 px-5 sm:px-10 gap-10 lg:gap-20 xl:px-30">

      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-4xl">Náš příběh</p>
        <p className="text-[#2B241F]/70 max-w-[300px] text-center text-sm">Od rodinného domu až po hospůdku, kterou dnes znáte.</p>
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