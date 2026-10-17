import dateIcon from "../../../../assets/icons/date.png"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { client } from "../../../../sanity/sanityClient"
import facebookY from "../../../../assets/icons/facebook-y.png";
import redirectY from "../../../../assets/icons/redirect-y.png";

type Event = {
  title: string
  date: string
  time: string
  description: string
  imageUrl: string
  imageAlt: string
}

function Event() {

  // const event = {
  //   title: 'Vánoční jarmark',
  //   date: '29.11.2026',
  //   time: '11:00',
  //   description: 'Přijďte si užít příjemnou předvánoční atmosféru na náš Vánoční jarmark! Těšit se můžete na vepřové i kuřecí řízky, bramborový salát a třeba i malé vánoční dárečky. Rádi přivítáme také všechny, kteří by si chtěli otevřít vlastní stánek a nabídnout své výrobky. Ať už přijdete prodávat, nebo si jen užít vánoční pohodu, těšíme se na vás !'
  // }

  const [event, setEvent] = useState<Event | null>(null);


  const POST_QUERY = `*[_type == "event"][0] {
  title,
  date,
  time,
  description,
  "imageUrl": image.asset->url,
  "imageAlt": image.alt
  }`

  useEffect(() => {

    async function getEvent() {
      const data: Event = await client.fetch(POST_QUERY);

      setEvent(data)
    }

    getEvent();
  }, [])

  return (
    <section id="akce" className="bg-[#38271F] font-[Bree_serif] py-10 flex flex-col items-center">

      <div className="px-5">
        <header className="text-[#FFFDF8]/80 flex flex-col gap-4 mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-base xl:text-lg">
            Na co se můžete těšit
          </motion.h2>
        </header>


        <div className="flex flex-col px-5 xxs:px-10 xs:px-15 sm:px-20 lg:flex-row lg:justify-center gap-10 border w-fit border-l-0 border-r-0 py-5 border-[#F5F0E6]/40">

          {!event ?
            <div className="text-[#FFFDF8] flex flex-col gap-3 px-10">

              <div className="text-2xl lg:text-3xl">Momentálně neplánujeme žádnou akci ani soutěž.</div>

              <div className="text-[#FFFDF8]/70 text-center text-sm">O dalších akcích a novinkách vás budeme informovat na našem Facebooku</div>

              <a
                href="https://www.facebook.com/profile.php?id=100093410382349"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-[#D9A441] rounded-xl w-fit self-center py-2 px-4 mt-3"
              >

                <img src={facebookY} alt="" className="w-[20px]"/>

                <span className="text-[#D9A441] text-sm">Sledujte nás na Facebooku</span>

                <img src={redirectY} alt="" className="w-[20px]"/>
              </a>

            </div>
            : <>
              <div className="flex flex-col gap-4 my-auto mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                  className="flex items-center gap-5">
                  <img src={dateIcon} alt="" className="w-[35px] h-[35px]" />
                  <div className="text-[#D9A441] text-base flex gap-2">
                    <span>{event.date}</span>
                    <span>|</span>
                    <span> OD {event.time}</span>
                  </div>
                </motion.div>

                <div className="overflow-hidden">
                  <motion.p
                    initial={{ opacity: 0, y: '100%' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="text-3xl lg:text-4xl text-[#FFFDF8]">
                    {event?.title}
                  </motion.p>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  className="text-xs lg:text-sm max-w-[500px] text-[#FFFDF8]/90 leading-[2]">
                  {event?.description}
                </motion.p>

              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <img src={event.imageUrl} alt={event.imageAlt} className=" object-contain border border-[#D9A441]/70 max-h-[300px] mx-auto lg:mx-0" />
              </motion.div>
            </>
          }
        </div>

      </div>

    </section>
  )
}

export default Event;