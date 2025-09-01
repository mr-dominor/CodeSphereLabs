"use client"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
const veclist = {
    software:{
        name:"Software Development",
        desc:"Tailor-made software solutions that streamline your operations and scale with your growth.",
        url:"/mine/Untitled design-swe.png"
    },
    web:{
        name:"Web & App Design",
        desc:"Visually stunning, responsive, and user-friendly websites and mobile apps",
        url:"/mine/Untitled design.png"
    },
    graph:{
        name:"Graphic Designing",
        desc:"Eye-catching visuals and creative designs that bring your brand’s identity to life, from logos to complete brand kits.",
        url:"/mine/Untitled design-gd.png"
    },
    main:{
        name:"Brand Promotion & Digital Marketing",
        desc:"From SEO to social media campaigns, we amplify your voice and connect you with your audience.",
        url:"/mine/Untitled design-b&c2.png"
    },
    video:{
        name:"Creative Shoots & Content Production",
        desc:"Professional photography, videography, and creative storytelling that give your brand a face and voice.",
        url:"/mine/Untitled design-b&c.png",
    },
    consult:{
        name:"Consulting & IT Solutions",
        desc:"Strategic guidance to help your business adopt the right digital tools and grow sustainably.",
        url:"/mine/Untitled design log.png",
    }
}
const Services = () =>{
     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
     const scrollPrev = useCallback(() => emblaApi?.scrollPrev(),[emblaApi]);
     const scrollNext = useCallback(() => emblaApi?.scrollNext(),[emblaApi])
    return(
        <div id="services" className="max-w-screen py-5 px-2 md:px-10 items-center justify-center border-b-2 ">
            <div className="text-center">
                <h2 className="text-4xl font-sans font-medium">Our Services</h2>
            </div>
            <div className="overflow-hidden " ref={emblaRef}>
                <div className="flex md:justify-center ">
                    {Object.values(veclist).map((vec,k)=>(
                        <div key={k} className="p-4">
                            <div className="bg-gray-100 rounded-lg p-1">
                                <div className="relative w-72 h-72 overflow-hidden rounded-lg bg-white">
                                <Image
                                fill
                                src={vec.url}
                                alt={vec.name}
                                />
                            </div>
                            <div className="text-center max-w-60 mx-auto py-2">
                                <span><h3 className="text-3xl font-sans font-semibold">{vec.name}</h3></span>
                            </div>
                            <div className="px-4 py-2">
                                <p>{vec.desc || null }</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center gap-x-2 mt-4">
              <Button variant="outline" onClick={scrollPrev}>{`<`}</Button>
              <Button variant="outline" onClick={scrollNext}>{`>`}</Button>
            </div>

        </div>
    )
}

export default Services;