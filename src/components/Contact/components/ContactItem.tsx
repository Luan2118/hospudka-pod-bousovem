import type { ReactNode } from "react";

type ContactItemProps = {
  src: string
  children: ReactNode;
}

function ContactItem({ src, children }: ContactItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm 2xl:text-base">
      <img src={src} alt="" className="w-[  px] h-[50px]"/>
      {children}
    </div>
  )
}

export default ContactItem;