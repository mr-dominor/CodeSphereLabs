"use client"
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
const linkList = {
    home:{
        src:"#home",
        name:"Home"
    },
    about:{
        src:"#about",
        name:"About"
    },
    contact:{
        src:"#contact",
        name:"Contact"
    }
}
const mont = Montserrat({
    subsets:["latin"],
    weight:["400","700"]
})
const NavLinks = () =>{
    return(
        <ul className="flex gap-x-3 md:gap-x-10">
            {Object.values(linkList).map((link,k)=>(
                <li key={k} className={cn(`font-medium hover:text-blue-500 hover:scale-115 transition-all duration-75 ease-in-out `,mont.className)}><Link href={`${link.src}`}>{link.name}</Link></li>
            ))}
        </ul>
    );
}

export default NavLinks