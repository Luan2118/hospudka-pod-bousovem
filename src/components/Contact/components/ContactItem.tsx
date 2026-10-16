import type { ReactNode } from "react";

type ContactItemProps = {
  src: string
  children: ReactNode;
  link: string
}

function ContactItem({ src, children, link }: ContactItemProps) {
  return (
    <a href={link} target="_blank"
      rel="noopener noreferrer" className="flex flex-col group items-center text-sm w-fit">
      <span className="flex items-center">
        <img src={src} alt="" className="w-[35px] h-[35px] " />
        {children}
      </span>
      <hr className="w-full ml-2 opacity-0 scale-x-0 origin-left group-hover:opacity-50 group-hover:scale-x-100 transition-transform duration-650 ease-out"/>
    </a>
  )
}

export default ContactItem;