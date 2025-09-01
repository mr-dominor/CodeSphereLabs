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
                     <div className="h-72 w-full  overflow-y-auto py-4  font-medium font-sans border-2 rounded-lg mt-2 px-1">
                        <h3 className="text-xl font-sans text-neutral-700 my-2">About Code Sphere Labs</h3>
                        <p className="text-amber-50">At Code Sphere Labs, we see technology not as cold machines or endless strings of code, but as an art form — a canvas where ideas take shape, where logic and creativity meet to create solutions that matter. We are more than a software company; we are dream-builders, giving life to visions and crafting digital experiences that inspire.</p>
                        <h3 className="text-xl font-sans text-neutral-700 my-2">Who We Are</h3>
                        <p className="text-amber-50">We are a collective of thinkers, creators, and innovators bound by a single purpose: to make technology human. Our journey began with a belief that every great idea deserves to be nurtured with care, transformed into something tangible, and released into the world with impact.</p>

                        <h3 className="text-xl font-sans text-neutral-700 my-2">What We Do</h3>
                        <p className="text-amber-50"><span className="text-neutral-700">Custom Software Development -</span> Bespoke digital solutions, built with precision, designed to grow with you. <br />
                        <span className="text-neutral-700">Web & Mobile Applications -</span>
                         Seamless, intuitive platforms that connect people and possibilities. <br />
                        <span className="text-neutral-700">Cloud, AI & Future Tech -</span>
                         Harnessing tomorrow’s tools today to give our clients an edge. <br />
                        <span className="text-neutral-700">Consulting & Support -</span>
                         Guiding businesses through digital transformation with clarity and confidence.
                        </p>
                        <h3 className="text-xl font-sans text-neutral-700 my-2">Our Philosophy</h3>
                        <p className="text-amber-50">We believe that code is more than syntax — it is a language of possibility. Every project we take on is approached not just as work, but as a collaboration, a shared journey with our clients to turn imagination into innovation. Transparency, trust, and timeless value are the pillars we stand on.</p>
                        <h3 className="text-xl font-sans text-neutral-700 my-2">Why Choose Us?</h3>
                        <p className="text-amber-50">
                        Vision-Driven – We don’t just solve problems; we unlock potential. <br />
                        Client First – Your story, your dream, our blueprint. <br />
                        Excellence in Craft – From the tiniest function to the grandest system, details matter. <br />
                        Future Ready – We design solutions that endure, evolve, and inspire.</p>
                        <h3 className="text-xl font-sans text-neutral-700 my-2">Our Mission</h3>
                        <p className="text-amber-50">To empower and elevate — creating software that simplifies lives, strengthens businesses, and sparks change.</p>
                        <h3 className="text-xl font-sans text-neutral-700 my-2">Our Vision</h3>
                        <p className="text-amber-50">To become a global sphere of innovation, where technology meets artistry, and where every idea, no matter how small, finds a stage to shine.</p>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default About;