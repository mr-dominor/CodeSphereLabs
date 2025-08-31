import React from "react";
import {Hero, Services, About, Founders, Projects,Footer} from "./sections/export"
const LandingPage = () =>{
    return(
        <div className="min-h-screen py-4 px-2 md:px-6">
           <Hero />
           <Services />
           <About />
           <Projects />
           <Founders />
           <Footer />
        </div>
    );
}

export default LandingPage;