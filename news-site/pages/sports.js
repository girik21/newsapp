import { GiAsianLantern } from "react-icons/gi";
import Link from "next/link";

export default function Sports() {
    return <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
    <Link href="/">
      <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
        <GiAsianLantern className="inline text-4xl mr-4" /> News24
      </a>
    </Link>
    </div>
    
}


