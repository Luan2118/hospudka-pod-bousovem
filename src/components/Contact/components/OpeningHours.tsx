import type { ReactNode } from "react";

type OpeningHoursProps = {
  openingHour?: string
  closingHour?: string
  closed: boolean
  children: ReactNode
  pathname: string
}

function OpeningHours({ openingHour, closingHour, closed, children, pathname }: OpeningHoursProps) {
  return (
    <div className={`flex justify-between items-center gap-30 text-sm border border-t-0 border-l-0 border-r-0  ${pathname !== '/' ? 'border-[#FFFDF8]/20' : 'border-[#2B241F]/20'}`}>
      <p className="">{children}</p>

      {closed ? <p className="tracking-wider">Zavřeno</p>

        : <div>
          <span>{openingHour}</span>
          <span>-</span>
          <span>{closingHour}</span>
        </div>
      }
    </div>
  )
}


export default OpeningHours;