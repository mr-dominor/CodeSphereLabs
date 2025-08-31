import Image from "next/image";

const Founders = () =>{
    return (
        <div id="founders" className=" max-w-screen bg-[linear-gradient(180deg,#84a9ff,#f5f8ff)] mt-5 py-5 px-2 md:px-10  rounded-2xl
                 ">
                    <h2 className="text-4xl text-center font-mono font-bold">Brains Behind The Brand</h2>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-evenly py-4 md:px-15 md:py-8">
                    <div className="relative h-[250px] md:h-[300px] w-full rounded-lg max-w-[300px] overflow-hidden mx-auto">
                        <Image
                        fill
                        src={`/mine/mubi.jpg`}
                        alt="Photo"
                        className="object-cover"
                        />
                    </div>
                    <div className=" w-full  px-4 md:px-15 py-5 md:py-8">
                        <div className="h-48 md:h-72 w-full  overflow-y-auto py-4  font-medium font-sans text-neutral-600 ">
                           <p>I’m <span className="font-semibold">Mubashshir Islam</span>, the founder and technical head of Code Sphere Labs. Technology has always been more than just code for me—it’s a way to solve real problems and create something meaningful. Over the years, I’ve worked across software development and system design, always driven by the idea that the best solutions are both powerful and simple.

I started Code Sphere Labs with a clear vision: to build a company that turns bold ideas into reliable, human-centered products. My goal is to make technology accessible, scalable, and impactful for businesses of all sizes—whether it’s a startup bringing a new idea to life or an established company looking to evolve in the digital age.

At Code Sphere Labs, I lead with a hands-on approach, guiding projects from concept to execution while fostering collaboration and innovation within the team. To me, this company isn’t just about delivering services—it’s about building trust, creating value, and leaving a lasting impact through technology.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly py-4 md:px-15 md:py-8">
                    <div className="relative h-[250px] md:h-[300px] w-full rounded-lg max-w-[300px] overflow-hidden mx-auto">
                        <Image
                        fill
                        src={`/mine/shahryar.jpg`}
                        alt="Photo"
                        className="object-cover object-center"
                        />
                    </div>
                    <div className=" w-full  px-4 md:px-15 py-5 md:py-8">
                        <div className="h-48 md:h-72 w-full  overflow-y-auto py-4  font-medium font-sans text-neutral-600 ">
                           <p>I’m <span className="font-semibold">Mohd Shaharyar</span>, the co-founder of Code Sphere Labs, a company built on creativity, innovation, and reliability. With a unique background as a theatre artist, writer, and director, he brings a storyteller’s vision into technology—crafting digital experiences that are efficient, meaningful, and human-centered.

His journey into tech grew from a passion for problem-solving and design. Over time, he has developed expertise in software development, freelancing ecosystems, and creative project management. This rare mix of artistic sensitivity and technical skill sets him apart as a leader who believes software should not only solve problems but also inspire.

At Code Sphere Labs, Shaharyar envisions a space where freelancers, developers, and creators collaborate to design future-ready solutions. The company is dedicated to building impactful products, clean designs, and scalable technologies for both businesses and individuals. Guided by his belief that technology should serve people, not overwhelm them, he works to merge creativity with technical excellence.

Through this vision, Shaharyar is helping to shape a culture of innovation, collaboration, and trust—where every project reflects balance, purpose, and lasting impact.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Founders