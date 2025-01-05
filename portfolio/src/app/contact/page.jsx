import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import images from "../images/contact-img.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div id='contact' className='flex sm:ml-2 '>
    
        <div>
        <h1 className='text-center text-3xl font-semibold mb-5 mt-3'>CONTACT</h1>
        <div className='flex flex-col gap-4 justify-center m-14 sm:flex-row'>
            <div className='border-2 border-transparent border-black p-4 flex gap-2 justify-evenly'>
              <h1 className='font-semibold'>Linked Id : </h1>
              <h2 className='text-blue-800 font-semibold underline cursor-pointer'> Writers linked id </h2>
            </div>
            <div className='border-2 border-transparent border-black p-4 flex gap-2 justify-evenly'>
              <h1 className='font-semibold'>Address : </h1>
              <h2 className='font-semibold'> Writers Address </h2>
            </div>
        </div>
        <div className='text-center mt-12 '>
          <h2 className='text-xl'>For other inquiries , please contact Writer using the form: </h2>
          <form action="" className='mt-8 flex flex-col justify-center items-center'>
            <input type="text" placeholder='Your Name' className='border-2 border-red-500 rounded-lg bg-red-300 placeholder:text-black placeholder:font-semibold p-2 sm:w-[40vw] w-[70vw] outline-none'/> <br />
            <input  type="email" placeholder='Your Email *' required className='border-2 border-red-500 rounded-lg bg-red-300 placeholder:text-black placeholder:font-semibold p-4 w-[70vw] sm:w-[40vw] outline-none'/> <br />
            <textarea cols={25} name="Message" id="message" placeholder='Enter your Message' className='border-2  border-red-500 rounded-lg bg-red-300 placeholder:font-semibold placeholder:text-black p-4 h-[30vh] sm:w-[40vw] w-[70vw] outline-none '>
            </textarea>
            <button className='group relative inline-flex items-center justify-start overflow-hidden rounded border-2 border-red-600 bg-red-600 px-5 py-3 mt-10 font-medium transition-all hover:bg-white'>
              <span className='absolute inset-0 rounded border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]'></span>
              <span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-red-600 font-semibold space-x-1'>Send Details</span> </button>
          </form>
        </div>
        </div>
        <div className='max-[600px]:hidden'>
          <img src={images.src} alt=""  className='sm:mt-10 sm:absolute'/>
        </div>
      </div>
      <Footer/>
    </div>
  );
} 
export default Contact;