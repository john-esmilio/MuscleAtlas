import React from 'react'
import { footerItems } from "@/constant"
import Link from 'next/link'
const Footer = () => {
  return (
    <nav className="z-30 py-5">
      <ul className="h-full gap-10 lg:flex">
        {footerItems.map((link) => (
          <Link href={link.href} key={link.key} 
            className=" text-gray-700
             cursor-pointer pb-1.5 px-1
            hover:font-bold">{link.label}</Link>
        ))}
      </ul>
    
    </nav>
  )
}

export default Footer;