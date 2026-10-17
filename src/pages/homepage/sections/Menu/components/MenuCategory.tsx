export type MenuItem = {
  id: string;
  title: string;
  price: number | null;

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

type MenuCategoryProps = {
  data: {
    _id: string;
    title: string;
    items: MenuItem[];
  }
};


function MenuCategory({ data }: MenuCategoryProps) {
  return (
    <>
      <h3 className="text-2xl font-[Bree_serif] mt-15  mb-6 ">{data.title}</h3>

      <div className={`grid grid grid-cols-1 md:gap-x-10 gap-y-6  ${data.items.length >= 6 ? 'md:grid-cols-2' : null}`}>
        {data.items.map((menuItem) => {
          return (
            <div key={menuItem.id} className="font-[Merriweather] flex flex-col gap-1 text-lg font-semibold">
              <div className="flex justify-between w-full text-base">
                <p className="">{menuItem.title}</p>
                <hr className="grow self-end mb-[5px] mx-[6px]" />

                {menuItem.secondaryPrice ?
                  <p className="">{menuItem.price} Kč | {menuItem.secondaryPrice} Kč</p>
                  : <p className="">{menuItem.price} Kč</p>}
              </div>

              <div className="flex text-[#2B241F]/80 justify-between text-xs xs:text-sm px-2 gap-4">

                {menuItem.description &&
                  <p>{menuItem.description}</p>
                }

                {menuItem.weight && menuItem.diameter ?
                  <div className="min-w-[82px]">
                    <span>{menuItem.weight}g</span>
                    <span> / {menuItem.diameter}cm</span>
                  </div>

                  : menuItem.weight ?
                    <span>({menuItem.weight}g)</span>

                    : menuItem.volume && menuItem.secondaryVolume  ?
                      <span>({menuItem.volume}l | {menuItem.secondaryVolume ? menuItem.secondaryVolume : 'l'})</span>

                      : menuItem.volume ?
                        <span>({menuItem.volume}l)</span>

                        : null
                }


              </div>
            </div>
          )

        })}
      </div>
    </>
  )
}


export default MenuCategory;