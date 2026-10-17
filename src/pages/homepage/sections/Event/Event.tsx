import dateIcon from "../../../../assets/icons/date.webp"
import { motion } from "motion/react"
import { useEffect, useState } from "react"
import { client } from "../../../../sanity/sanityClient"
import facebookY from "../../../../assets/icons/facebook-y.webp";
import facebookB from "../../../../assets/icons/facebook-b.webp";
import redirectY from "../../../../assets/icons/redirect-y.webp";
import redirectB from "../../../../assets/icons/redirect-b.webp";

type Event = {
  title: string
  date: string
  time: string
  description: string
  imageUrl?: string
  imageAlt?: string
}

function Event() {

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


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
      try {
        setLoading(true)
        setError(null)
        const data: Event = await client.fetch(POST_QUERY);

        setEvent(data)
      } catch (error) {
        setError('Informace o aktuálních akcích a soutěžích jsou momentálně nedostupné. Zkuste to prosím později.')
        console.error(error)
      } finally {
        setLoading(false)
      }

    }

    getEvent();
  }, [])

  const eventDate = new Date(`${event?.date}T00:00:00`).toLocaleDateString("cs-CZ")

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

          {loading ?
            <>
              <div className="flex min-h-[150px] min-w-[230px] flex-col items-center justify-center gap-4">
                <div className="h-6 w-6  animate-spin rounded-full border-3 border-[#FFFDF8]/20 border-t-[#FFFDF8]" />

                <p className="font-[Bree_serif] text-sm text-[#FFFDF8]/70">
                  Načítání události...
                </p>
              </div>
            </> :

            error ?
              <>
                <div
                  role="alert"
                  className="flex py-10 flex-col items-center justify-center gap-3 px-5 text-center"
                >
                  <h3 className="font-[Bree_serif] text-xl text-[#FFFDF8]">
                    Události se nepodařilo načíst
                  </h3>

                  <p className="max-w-md text-sm leading-relaxed text-[#FFFDF8]/70">
                    {error}
                  </p>
                </div>
              </> :

              !event ?
                <div className="text-[#FFFDF8] flex flex-col gap-4 py-4">

                  <div className="text-2xl lg:text-3xl text-center">Momentálně neplánujeme žádnou akci ani soutěž.</div>

                  <div className="text-[#FFFDF8]/70 text-center text-sm">O dalších akcích a novinkách vás budeme informovat na našem Facebooku</div>

                  <motion.a
                    href="https://www.facebook.com/profile.php?id=100093410382349"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial="initial"
                    whileHover="hover"
                    className="group relative overflow-hidden border border-[#D9A441] rounded-xl w-fit self-center py-2 px-4 mt-3 cursor-pointer"
                  >
                    <motion.span
                      aria-hidden="true"
                      variants={{
                        initial: { y: "-100%" },
                        hover: { y: "0%" },
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-[#D9A441]"
                    />

                    <motion.span
                      variants={{
                        initial: { color: "#D9A441" },
                        hover: { color: "#3E2818" },
                      }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 flex items-center gap-2 text-xs sm:text-sm"
                    >

                      <span className="relative h-5 w-5">
                        <img
                          src={facebookY}
                          alt=""
                          className="absolute inset-0 w-5 transition-opacity duration-300 group-hover:opacity-0"
                        />

                        <img
                          src={facebookB}
                          alt=""
                          className="absolute inset-0 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </span>

                      Sledujte nás na Facebooku

                      <span className="relative w-5 h-5">
                        <img
                          src={redirectY}
                          alt=""
                          className="absolute inset-0  transition-opacity duration-300 group-hover:opacity-0"
                        />

                        <img
                          src={redirectB}
                          alt=""
                          className="absolute inset-0  opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </span>
                    </motion.span>
                  </motion.a>

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
                        <span>{eventDate}</span>
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
                    {!event.imageUrl ?
                      null
                      : <img src={event.imageUrl} alt={event.imageAlt} className=" object-contain border border-[#D9A441]/70 max-h-[300px] mx-auto lg:mx-0" />
                    }
                  </motion.div>
                </>

          }
        </div>

      </div>

    </section>
  )
}

export default Event;
