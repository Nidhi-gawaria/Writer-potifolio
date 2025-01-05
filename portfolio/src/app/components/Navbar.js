'use client';
import React from 'react';
import link from 'next/link';
import { useState } from 'react';
import Desktoplinks from '../Navbarcomponents/Desktoplinks';
import Name from '../Navbarcomponents/Name';
import Mobilemenubutton from '../Navbarcomponents/Mobilemenubutton';
import MobileDrawer from '../Navbarcomponents/MobileDrawer';


const Navbar = ()=>{
const [isdraweropen, setisdraweropen] = useState(false);
const handeldrawertoggle =() =>{
  setisdraweropen(!isdraweropen);
}

  return (
    <>
    <div className=" hidden relative py-6 px-8 sm:flex justify-between h-[70vh] sm:h-[25vh]">
      <Name />
      <Desktoplinks />
    </div>
    <div className="sm:hidden relative flex flex-row pt-8 pl-4 mobileview mb-10">
      <Name />
      <Mobilemenubutton onClick={handeldrawertoggle} />
      <MobileDrawer isOpen={isdraweropen} onClose={handeldrawertoggle} />
    </div>
    </>
  );
}

export default Navbar;
