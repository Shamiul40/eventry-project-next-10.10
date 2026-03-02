import Image from "next/image";

import logo from "/public/assets/logo.svg"

export default function Header() {
  return (
   <nav>
        <div>
            <Image src={logo} width={100} height={100} alt="logo" />
        </div>
        <ul>
            <li>about</li>
            <li>Contact Us</li>
        </ul>
        
   </nav>
  )
}
