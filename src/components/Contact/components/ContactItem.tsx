import type { ReactNode } from "react";

type ContactItemProps = {
  src: string
  children: ReactNode;
  link: string
}

function ContactItem({ src, children, link }: ContactItemProps) {
  return (
    <a href={link} target="_blank"
      rel="noopener noreferrer" className="flex items-center gap-2 text-sm w-fit">
      <img src={src} alt="" className="w-[35px] h-[35px] " />
      {children}
    </a>
  )
}

export default ContactItem;