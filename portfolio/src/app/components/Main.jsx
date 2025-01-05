import React from 'react';
import image from '../images/image01.jpg';
import Navbar from './Navbar';
import Footer from './Footer';


const Main = () => {
  return (
    <>
    <Navbar/>
    <div className='flex items-center flex-col justify-center'>
      <img src={image.src} alt="" className='h-[35vh] m-6 w-[90vw] border-2 border-gray-500 rounded sm:w-[50vw] sm:h-[50vh]' />
   
    <p className='m-10 mt-5 text-center text-xl'>I love writting and I write , no matter what</p>
    <p className='m-10 mt-5 text-center text-xl'>More About the writer </p>
    </div>
   <Footer/>
    </>
  );
}

export default Main;