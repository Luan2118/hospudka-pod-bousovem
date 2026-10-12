import ukonceniSezony2026 from "../../../../assets/akce/ukonceni-letni-sezony-2026.png"
import dateIcon from "../../../../assets/icons/date.png"
import yellowArrow from "../../../../assets/icons/yellowArrow.png"

function Event() {
  return (
    <section id="akce" className="bg-[#23472C] font-[Bree_serif] lg:h-[560px] py-10 flex flex-col gap-10">

      <header className="text-[#FFFDF8] flex flex-col items-center gap-4">
        <h2 className="text-4xl lg:text-5xl">Akce u nás</h2>
        <p className="max-w-[550px] text-center text-[#FFFDF8]/80 text-xs lg:text-sm  px-5 xxs:px-10 ">Rádi se společně bavíme! Pořádáme nejrůznější akce, soutěže a setkání, při kterých si užijete dobrou náladu a příjemnou atmosféru.</p>
      </header>

      <div className="flex flex-col px-5 xxs:px-10 xs:px-15 sm:px-20 lg:flex-row lg:justify-center gap-10">
        <div>
          <img src={ukonceniSezony2026} alt="Ukončení sezóny 2026" className=" object-contain border border-[#D9A441]/70 max-h-[400px] mx-auto lg:mx-0" />
        </div>

        <div className="flex flex-col gap-4 my-auto mx-auto lg:mx-0">
          <div className="flex items-center gap-1">
            <img src={dateIcon} alt="" className="w-[40px]" />
            <div className="text-[#D9A441] text-sm flex gap-2">
              <span>3.10.2026</span>
              <span>|</span>
              <span> OD 16:00</span>
            </div>
          </div>

          <p className="text-3xl lg:text-4xl text-[#FFFDF8]">Ukončení letní sezóny</p>
          <p className="text-xs lg:text-sm max-w-[600px] text-[#FFFDF8]/90">Přijďte si užít skvělý den plný dobrého jídla a živé hudby! O příjemnou atmosféru se postará kapela Rezavé struny a těšit se můžete na pečené prasátko, srbské žebírko z lodny a šťavnatý Tomahawk steak z grilu.</p>

          <button className="flex items-center border w-fit px-6 py-1 rounded-3xl border-[#D9A441] mt-4">
            <span className="text-[#D9A441]">Vice Informací</span>
            <img src={yellowArrow} alt="" className="w-[30px] h-[30px]" />
          </button>

        </div>
      </div>
    </section>
  )
}

export default Event;