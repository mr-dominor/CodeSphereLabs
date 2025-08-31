"use client"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
const veclist = {
    web:{
        name:"Web Applications",
        url:"/mine/lap-s2.png"
    },
    graph:{
        name:"Graphic Designing",
        url:"/mine/graphic.png"
    },
    main:{
        name:"Website Maintainance",
        url:"/mine/maintainance.png"
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
                            <div className="relative w-72 h-72 overflow-hidden rounded-lg bg-neutral-300">
                                <Image
                                fill
                                src={vec.url}
                                alt={vec.name}
                                />
                            </div>
                            <div className="text-center max-w-48 mx-auto py-2">
                                <span><h3 className="text-3xl font-mono">{vec.name}</h3></span>
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