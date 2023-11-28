import Link from "next/link"
import { navItems } from "@/constant"

const Navbar = () => {
  return (
    <nav className="py-5">
      <ul className="h-full gap-14 lg:flex">
        {navItems.map((link) => (
          <Link href={link.href} key={link.key} 
            className=" text-gray-700
            cursor-pointer pb-1.5 px-1
            hover:font-bold">{link.label}</Link>
        ))}
        </ul>
      
    </nav>
  )
}

export default Navbar;