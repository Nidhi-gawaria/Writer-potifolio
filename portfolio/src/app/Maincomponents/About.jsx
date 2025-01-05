"use client"
import React from 'react';
import image from "../images/book-bg.jpg";
import Link from 'next/link';
import { useRouter }  from "next/navigation";

const About = () => {
  const router = useRouter()
  return (
    <div>
       <div id="about" className="text-black mt-10 mb-6">
        <h1 className="text-center pt-6 text-2xl font-bold font-serif sm:text-4xl">
          ABOUT  ME 
        </h1>
        <div className="flex sm:flex-row pb-10 flex-col justify-center">
        <div className="mt-8 flex justify-center ml-5 sm:w-[50%]">
          <img
            src={image.src}
            alt="Image of writer"
            className="flex justify-center align-center h-[250px] w-[250px] sm:h-[350px] sm:w-[350px]"
          />
        </div>
        <div className="m-10 flex flex-col justify-center items-center sm:w-[50%]">
          <p className="text-xl text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis hic,
            ipsam porro omnis laboriosam tempore!
          </p>
          <p className="pt-5 font-serif text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            ducimus commodi sint consequuntur iusto quisquam cupiditate
            asperiores eum tenetur deleniti id est dignissimos, ut nesciunt
            ullam dolorum quae? Nihil, impedit?
          </p>
        <button className="mt-5 flex justify-center border-2 border-transparent bg-red-500 rounded-md p-2 w-[150px] text-white  font-bold hover:bg-black"
         type='button' onClick={() => router.push('/contact')} >Contact Me</button> </div>
        </div>
      </div>
    </div>
  );
}

export default About;
