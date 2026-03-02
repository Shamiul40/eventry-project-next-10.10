import Image from "next/image";

import logo from "/public/assets/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center py-4  ">
      <Link href="/">
        <Image src={logo} width={130} height={130} alt="logo" />
      </Link>
      <ul className="flex justify-center items-center gap-2 text-[#9C9C9C] md:gap-3 lg:gap-4">
        <Link href="/about">
          {" "}
          <li>about</li>
        </Link>
        <Link href="/contact-us">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
