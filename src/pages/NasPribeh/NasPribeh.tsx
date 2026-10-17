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
            className="text-5xl leading-[1.2]">
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
          description="V roce 2018 jsme odkoupili zpět dům č. p. 1 ve Všekarech, který naší rodině patřil už od poloviny 19. století. V roce 1981 jej však rodina prodala chalupářům z Prahy. Když se dům po letech vrátil do našich rukou, nebyl zrovna v nejlepším stavu. Stáli jsme tak před rozhodnutím, zda ho zbourat, nebo mu dát nový život."
          image={hospodaZacatek1} />


        <StorySection
          title="Od nápadu ke skutečnosti"
          description="V rozhodování nám nakonec pomohla pandemie covidu. V době, kdy bylo cestování omezené, jsme si začali všímat, kolik lidí prochází naší obcí na výlety do lesa a okolní přírody. Tehdy se zrodila myšlenka proměnit starý dům v malé občerstvení nebo bistro. Nechali jsme zpracovat projekt a v březnu roku 2020 se pustili do rekonstrukce. Z původního domu zůstaly pouze obvodové stěny a střecha. Už na podzim téhož roku bylo hotovo. Následující tři roky jsme se zde o víkendech scházeli s přáteli, kteří nás od začátku podporovali. Dne 9. června 2023 jsme po získání všech potřebných povolení Hospůdku pod Boušovem oficiálně otevřeli."
          image={hospodaZacatek2} />

        <StorySection
          title="Hospůdka dnes"
          description="Začínali jsme skromně, s pouhými třemi slunečníky. Postupně se ale naše hospůdka rozrůstala. V roce 2024 jsme vybudovali pergolu a o rok později zastřešili také prostor nad vchodem. A proč právě Hospůdka pod Boušovem? Svůj název získala podle nedalekého kopce Boušov, který se nachází nad obcí Všekary a nabízí krásný výhled do okolní krajiny."
          image={hospodaZacatek3} />

      </div>


    </div>
  )
}

export default NasPribeh;