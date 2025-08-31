import Image from "next/image";
import {Mail,Phone} from "lucide-react"
const Footer = () =>{
    return (
        <div id="contact" className=" my-5 py-8 px-2 md:px-5 border-t-2 ">
            <div className="w-full h-auto flex flex-col md:flex-row justify-center gap-x-4 ">
                <div className="px-2 flex gap-x-2 items-center ">
                    <div className="relative h-12 w-12 flex flex-col md:flex-row p-1 rounded-lg overflow-hidden">
                    <Image 
                    src={`/mine/csllogo3.png`}
                    alt={"Logo"}
                    fill
                    />
                    </div>
                    <div className="flex items-center">
                        <span className={`font-bold`}>Code Sphere Labs</span>
                    </div>
                </div>
                <div className="mt-4 md:mt-0 w-80 h-auto bg-gray-200 rounded-lg p-2">
                    <h3 className="text-2xl font-medium font-sans" >Contact Details</h3>
                    <div className="bg-white mt-1 p-2 rounded-lg">
                        <p className="font-medium py-1">Mubashshir Islam</p>
                        <div className="flex items-center gap-2 text-neutral-700">
                          <Mail className="text-blue-600" />
                          <span>mubashshirislam201@gmail.com</span>
                        </div>
                    
                        <div className="flex items-center gap-2 text-neutral-700">
                          <Phone className="text-blue-600" />
                          <span>+91 8005 336 4533</span>
                        </div>
                    </div>
                    <div className="bg-white mt-1 p-2 rounded-lg">
                        <p className="font-medium py-1">Mohd Shaharyar</p>
                        <div className="flex items-center gap-2 text-neutral-700">
                          <Mail className="text-blue-600" />
                          <span>sshaharyar.work@gmail.com</span>
                        </div>
                    
                        <div className="flex items-center gap-2 text-neutral-700">
                          <Phone className="text-blue-600" />
                          <span>+91 6392 450 035</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;