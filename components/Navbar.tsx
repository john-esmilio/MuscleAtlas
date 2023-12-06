import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constant";
import Login from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Muscle Atlas Logo"
          width={150}
          height={10}
          className=""
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {navItems.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className=" text-gray-700 flex items-center
            cursor-pointer pb-1.5 px-1
            hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div>
        <Login type="button" title="Login" variant="login_btn" />
      </div>
    </nav>
  );
};

export default Navbar;
