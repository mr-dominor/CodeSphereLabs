"use client"
import Navbar from "../components/navbar";
import Image from "next/image";
import {TypeAnimation} from "react-type-animation"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () =>{
    return(
        <div id="home" className="max-w-screen py-5 px-1 md:px-10 bg-[linear-gradient(180deg,#84a9ff,#f5f8ff)] rounded-2xl
 ">
            <Navbar />
            {/**Hero Section with 2 sections */}
            <div className="flex flex-col justify-between md:flex-row mt-10">
                <div className="w-full md:w-[50%] px-2 md:px-10 py-15">
                    <span className={cn("text-5xl font-bold font-sans ")}>Code Sphere Labs</span><br />
                    <div className=" h-24 lg:h-16 text-3xl font-semibold text-neutral-600 inline-block mt-5 ">
                        <TypeAnimation
                            sequence={[
                              "<Crafting Digital Dimensions  />", // Types this string
                              1000,            // Waits 1s
                               "<Building Scalable Web Experiences 🚀 />",
                                2000,
                                "<Designing with Purpose ✨ />",
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: "inline-block" }}
                        />
                    </div><br />
                    <span className="text-neutral-500 font-medium font-sans">{`"`}At Code Sphere Labs, we transform ideas into seamless digital experiences.
                    Our team crafts responsive, scalable web applications with modern technologies,
                    combining creativity, performance, and user-focused design to deliver products that truly shine.{`"`}</span>
                    <div className="p-2 ">
                        <Button variant={"default"} size={"lg"} className="bg-[#3366ff]" asChild ><Link href={`#project`}>Projects</Link></Button>
                        <Button variant={"outline"} size={"lg"} className="text-[#3366ff] border-2 border-[#3366ff] hover:border-black bg-transparent ml-2" asChild ><Link href={`#contact`}>Contact Us</Link></Button>
                    </div>
                </div>
                <div className="relative w-full h-[500px] md:w-[50%]">
                    <div className="relative max-w-[500px] h-[430px] md:h-[500px] border-2 border-solid rounded-lg overflow-hidden">
                        <Image
                        fill
                        src={`/mine/hand2.png`}
                        alt="Image"
                        className="object-contain"
                        style={{objectPosition:"left bottom"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;