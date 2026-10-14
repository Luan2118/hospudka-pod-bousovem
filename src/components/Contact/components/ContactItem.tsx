import type { ReactNode } from "react";

type ContactItemProps = {
  src: string
  children: ReactNode;
}

function ContactItem({ src, children }: ContactItemProps) {
  return (
    <div className="flex items-center gap-2 text-sm ">
      <img src={src} alt="" className="w-[35px] h-[35px] "/>
      {children}
    </div>
  )
}

export default ContactItem;