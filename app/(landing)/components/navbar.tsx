import Image from "next/image"
import { Quicksand } from "next/font/google"
import { Button } from "@/components/ui/button"
import NavLinks from "./navLinks"
import Link from "next/link"

const quick = Quicksand({
    subsets:["latin"],
    weight:["400","700"]
})
const Navbar = () =>{
    return(
        <nav className="w-full h-16 flex justify-between items-center">
            {/**Branding */}
            <div className="px-2 flex gap-x-2 ">
                <div className="relative h-12 w-12 p-1 rounded-lg overflow-hidden">
                <Image 
                src={`/mine/csllogo3.png`}
                alt={"Logo"}
                fill
                />
            </div>
            <div className="hidden sm:block">
                <span className={`font-bold ${quick.className}`}>Code Sphere<br />Labs</span>
            </div>
            </div>
            {/**Links */}
            <div>
                <NavLinks />
            </div>
            <div>
                <Button className="bg-[#3366ff]" asChild size={"sm"}>
                    <Link href="#services">Services</Link>
                </Button>
            </div>
        </nav>
    )
}

export default Navbar