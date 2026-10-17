import { useEffect, useState } from "react";
import Button from "./components/Button";
import MenuCategory from "./components/MenuCategory";
import { motion } from "motion/react";
import { client } from "../../../../sanity/sanityClient";


export type MenuItem = {
  _id: string;
  title: string;
  price: number;

  // 
  description?: string;
  weight?: number;
  diameter?: number;

  // Drinks
  volume?: number;
  secondaryPrice?: number;
  secondaryVolume?: number;
  secondaryLabel?: string;
};

type MenuCategory = {
  _id: string
  title: string
  menuType: string
  items: MenuItem[]

}


function Menu() {

  const POST_QUERY = `*[_type == "menuCategory"]  | order(order asc)  {
    _id,
    title,
    menuType,
    "items": *[
      _type == "menuItem" &&
      references(^._id)
    ] | order(order asc) {
      _id,
      title,
      price,
      description,
      weight,
      diameter,
      volume,
      secondaryVolume,
      secondaryPrice
    }
  }`


  const [menu, setMenu] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    async function getMenu() {
      try {
        setLoading(true)
        setError(null)
        const data: MenuCategory[] = await client.fetch(POST_QUERY);

        setMenu(data)

      } catch (error) {
        setError('Omlouváme se, momentálně se nám nedaří zobrazit naši nabídku. Zkuste to prosím později.')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getMenu();
  }, [])


  const foodData = menu.filter((menu) => menu.menuType === 'food')
  const drinksData = menu.filter((menu) => menu.menuType === 'drinks')




  const [menuType, setMenuType] = useState('Jídelní Lístek');

  function handleMenuButton(menu: string) {
    setMenuType(menu)
  }

  const menuTypeList = ['Jídelní Lístek', 'Nápojový Lístek']

  const menuData = (
    menuType === 'Jídelní Lístek' ? foodData :
      menuType === 'Nápojový Lístek' ? drinksData : []
  ).filter((category) => category.items.length > 0)


  return (
    <section id="menu" className="bg-[#F5F0E6] text-[#2B241F] pt-10 pb-20 lg:pb-30 ">

      {loading ?
        <>
          <div className="flex pt-20 flex-col items-center justify-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-3 border-[#3E2818]/20 border-t-[#3E2818]" />

            <p className="font-[Bree_serif] text-sm text-[#3E2818]/70">
              Načítání nabídky…
            </p>
          </div>
        </> :

        error ?
          <>
            <div
              role="alert"
              className="flex pt-20 flex-col items-center justify-center gap-3 px-5 text-center"
            >
              <h3 className="font-[Bree_serif] text-xl text-[#3E2818]">
                Nabídku se nepodařilo načíst
              </h3>

              <p className="max-w-md text-sm leading-relaxed text-[#3E2818]/70">
                {error}
              </p>
            </div>
          </>
          :
          <>
            <header className="flex flex-col items-center font-[Bree_serif] gap-8 pt-8">

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-4xl">
                NAŠE MENU
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col gap-2 xxs:flex-row">
                {menuTypeList.map((type) => {
                  return <Button key={type} handleMenuButton={handleMenuButton} value={type} menuType={menuType}>{type}</Button>
                })}
              </motion.div>
            </header>


            <div className="text-[#2B241F] px-5 xs:px-10 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
              {menuData.length === 0 ? (
                <p role="status" className="pt-12 text-center font-[Bree_serif] text-sm text-[#2B241F]/70">
                  V tomto lístku zatím nejsou žádné položky.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 ">
                  {menuData.map((category) => {
                    return (
                      <div key={category._id} className={`${category.items.length >= 6 ? 'md:col-span-2' : ''}`}>
                        <MenuCategory data={category} />
                      </div>
                    )
                  })}
                </div>
              )}

            </div>
          </>
      }



    </section>
  )
}

export default Menu;
