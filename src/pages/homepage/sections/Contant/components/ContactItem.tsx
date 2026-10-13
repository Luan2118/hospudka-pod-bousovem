import type { ReactNode } from "react";

type ContactItemProps = {
  src: string
  children: ReactNode;
}

function ContactItem({ src, children }: ContactItemProps) {
  return (
    <div className="flex items-center gap-2">
      <img src={src} alt="" className="w-[40px] h-[40px]"/>
      {children}
    </div>
  )
}

export default ContactItem;