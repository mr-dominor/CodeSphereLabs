"use client"
import Image from "next/image";
const About = () =>{
    return(
        <div id="about" className=" max-w-screen mt-5 py-5 px-2 md:px-10 bg-[#487df9] rounded-2xl
         ">
            <div className="flex flex-col md:flex-row justify-evenly py-4 md:px-15 md:py-8">
                <div className="relative h-[400px] w-full rounded-lg max-w-[500px] overflow-hidden">
                    <Image
                    fill
                    src={`/mine/pexels-fauxels-3183165.jpg`}
                    alt="Photo"
                    className="object-cover"
                    />
                </div>
                <div className=" w-full  px-4 md:px-15 py-5 md:py-8">
                     <h2 className="text-4xl text-center text-neutral-700 font-sans font-medium">About Us</h2>
                     <div className="h-72 w-full  overflow-y-auto py-4  font-medium font-sans ">
                        <p className="text-amber-50">At Code Sphere Labs, we believe in the power of independent creativity and professional expertise. We’re a collective of skilled freelancers—designers, developers, writers, marketers, and strategists—brought together by a shared passion for helping businesses grow. <br />

What sets us apart is our flexibility and personal touch. We combine the agility of freelancing with the reliability of an agency. Every project gets tailored attention, ensuring clients receive not just deliverables, but real solutions that make an impact.
<br />
Our mission is simple: to bridge the gap between talent and opportunity. Whether you’re a startup looking for brand identity, a company in need of a website revamp, or a business wanting to boost digital presence, we provide end-to-end support without the overhead of a traditional agency.
<br />
We value clear communication, transparency, and long-term partnerships. With us, you’re not just hiring freelancers—you’re gaining a dedicated team committed to your success.</p>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default About;