import dateIcon from "../../../../assets/icons/date.png"
import letniVanoce from "../../../../assets/akce/letni-vanoce.png"
function Event() {

  const event = {
    title: 'Vánoční jarmark',
    date: '29.11.2026',
    time: '11:00',
    description: 'Přijďte si užít příjemnou předvánoční atmosféru na náš Vánoční jarmark! Těšit se můžete na vepřové i kuřecí řízky, bramborový salát a třeba i malé vánoční dárečky. Rádi přivítáme také všechny, kteří by si chtěli otevřít vlastní stánek a nabídnout své výrobky. Ať už přijdete prodávat, nebo si jen užít vánoční pohodu, těšíme se na vás !'
  }
  return (
    <section id="akce" className="bg-[#23472C] font-[Bree_serif] lg:h-[560px] py-10 flex flex-col gap-10">

      <header className="text-[#FFFDF8] flex flex-col items-center gap-4">
        <h2 className="text-4xl lg:text-5xl">Akce u nás</h2>
        <p className="max-w-[550px] text-center text-[#FFFDF8]/80 text-xs lg:text-sm  px-5 xxs:px-10 ">Rádi se společně bavíme! Pořádáme nejrůznější akce, soutěže a setkání, při kterých si užijete dobrou náladu a příjemnou atmosféru.</p>
      </header>

      <div className="flex flex-col px-5 xxs:px-10 xs:px-15 sm:px-20 lg:flex-row lg:justify-center gap-10">
        <div>
          <img src={letniVanoce} alt="Ukončení sezóny 2026" className=" object-contain border border-[#D9A441]/70 max-h-[350px] mx-auto lg:mx-0" />
        </div>

        <div className="flex flex-col gap-4 my-auto mx-auto lg:mx-0">
          <div className="flex items-center gap-1">
            <img src={dateIcon} alt="" className="w-[40px]" />
            <div className="text-[#D9A441] text-base flex gap-2">
              <span>{event.date}</span>
              <span>|</span>
              <span> OD {event.time}</span>
            </div>
          </div>

          <p className="text-3xl lg:text-4xl text-[#FFFDF8]">{event.title}</p>
          <p className="text-xs lg:text-sm max-w-[600px] text-[#FFFDF8]/90">{event.description}</p>
        </div>
      </div>
    </section>
  )
}

export default Event;