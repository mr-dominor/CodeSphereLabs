"use client"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
import Link from "next/link"

    const veclist = {
  web: {
    name: "Bizora",
    url: "/mine/bizora.png",
    desc:
      "Bizora is a next-generation e-commerce application designed with an immersive, modern UI. Built on top of Next.js and Supabase, it delivers seamless shopping experiences, intuitive navigation, and scalable features tailored for growth.",
    link:"https://bizora-git-master-mr-dominors-projects.vercel.app"
  },
  graph: {
    name: "Finovia",
    url: "/mine/dashed.png",
    desc:
      "Finovia is a powerful financial dashboard crafted with a sleek, user-friendly interface. Leveraging the same Next.js + Supabase architecture as Bizora, it enables businesses to track, analyze, and visualize financial data effortlessly.",
    link:"https://finovia-g162-git-master-mr-dominors-projects.vercel.app"
  
    },

  main: {
    name: "Authora",
    url: "/mine/authora.png",
    desc:
      "Authora is a secure authentication service built for modern applications. It simplifies user management and access control, providing developers with a reliable foundation for integrating sign-in, sign-up, and identity solutions.",
    link:null,
  }
}


const Projects = () =>{
     const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
     const scrollPrev = useCallback(() => emblaApi?.scrollPrev(),[emblaApi]);
     const scrollNext = useCallback(() => emblaApi?.scrollNext(),[emblaApi])
    return(
        <div id="project" className="max-w-screen py-5 px-2 md:px-10 items-center justify-center border-b-2 ">
            <div className="text-center">
                <h2 className="text-4xl font-sans font-medium">Our Projects</h2>
            </div>
            <div className="overflow-hidden " ref={emblaRef}>
                <div className="flex md:justify-center ">
                    {Object.values(veclist).map((vec,k)=>(
                        <div key={k} className="p-4">
                            <Link href={`${vec.link}`}>
                            <div className="bg-gray-100 p-2 flex flex-col rounded-lg">
                                <div className="relative w-[300px] md:w-[400px] h-72 overflow-hidden rounded-lg bg-neutral-300">
                                    <Image
                                    fill
                                    src={vec.url}
                                    alt={vec.name}
                                    className="object-cover"
                                    />
                                </div>
                                <div className="text-center w-full md:w-1/2 mx-auto py-4 flex items-center px-2">
                                    <span><h3 className="text-3xl font-sans font-medium">{vec.name}</h3></span>
                                </div>
                                <div className="p-2 font-sans text-gray-600">
                                    <p>{vec.desc}</p>
                                </div>
                            </div>
                            </Link>
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

export default Projects;