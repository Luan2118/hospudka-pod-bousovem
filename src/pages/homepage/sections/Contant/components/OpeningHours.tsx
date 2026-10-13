import { p } from "motion/react-client";
import type { ReactNode } from "react";

type OpeningHoursProps = {
  openingHour?: string
  closingHour?: string
  closed: boolean
  children: ReactNode
}

function OpeningHours({ openingHour, closingHour, closed, children }: OpeningHoursProps) {
  return (
    <div className="flex justify-between items-center gap-30 text-base 2xl:text-lg border border-t-0 border-l-0 border-r-0 border-[#000000]/30">
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