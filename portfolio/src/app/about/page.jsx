import React from "react";
import About from "../Maincomponents/About";
import Experience from "../Maincomponents/Experience";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Aboutmain = () => {
  return (
    <>
    <div>
      <Navbar/>
     <About/>
     <Experience/>
     <Footer/>
    </div>
    
    </>
  );
};

export default Aboutmain;
