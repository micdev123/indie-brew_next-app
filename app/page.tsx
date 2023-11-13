import Image from "next/image";
import Link from "next/link";
import Logo from '../public/Logo.svg'

export default function Home() {
  return (
    <header className="h-[90vh]">
      <div className="header_container max-w-[90%] mx-auto relative sm:max-w-[90%] xl:max-w-[80%]">
        <nav className="py-[2rem] flex items-center justify-between">
          <Link href='/' >
            <Image src={Logo} alt="logo"  className="w-[6.5rem]" />
          </Link>
          <ul className="flex items-center gap-x-[1rem] text-[13px] font-medium">
            <li>
              Pricing
            </li>
            <li>
              Support
            </li>
            <button className="bg-blue-600 text-white py-[10px] px-[15px] rounded-md">
              Get Started
              <span className="text-[12px] font-light"> - it's free</span>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  )
}
