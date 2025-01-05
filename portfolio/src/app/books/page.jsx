import React from 'react';
import random from '../images/book_bg2.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import book1 from '../images/book1.jpg';
import book2 from '../images/book2.jpg';
import book3 from '../images/book3.jpg';

const Books = () => {
  return (
    <>
    <Navbar/>
      <div className='m-14'>
        <div className='flex flex-col items-center m-14 text-center sm:flex-row'>
            <img src={book1.src} alt="this is writers book" className='h-[30vh]  m-10 w-[100vw] sm:w-[30vw] sm:h-[50vh]' />
            <div className='sm:ml-10'>
            <h1 className='font-bold text-xl'>Name of book </h1>
            <h3 className='font-semibold mt-4'>description </h3>
            <h2 className='mt-2'>find it here : </h2>
            <p className='mt-1'>name of place to find book</p>
            </div> 
        </div>
        <hr className='border-gray-300'/>
        <div className='flex flex-col items-center m-14 text-center sm:flex-row'>
            <img src={book2.src} alt="this is writers book" className='h-[30vh] m-10  w-[100vw] sm:w-[30vw] sm:h-[50vh]' />
            <div className='sm:ml-10'>
            <h1 className='font-bold text-xl'>Name of book</h1>
            <h3 className='font-semibold mt-4'>description </h3>
            <h2 className='mt-2'>find it here : </h2>
            <p className='mt-1'>name of place to find book</p>
            </div> 
        </div>
       <hr className='border-gray-300'/>
        <div className='flex flex-col items-center m-14 text-center sm:flex-row'>
            <img src={book3.src} alt="this is writers book" className='h-[30vh] m-10  w-[120vw] sm:w-[30vw] sm:h-[50vh]' />
            <div className='sm:ml-10'>
            <h1 className='font-bold text-xl'>Name of book</h1>
            <h3 className='font-semibold mt-4'>description </h3>
            <h2 className='mt-2'>find it here : </h2>
            <p className='mt-1'>name of place to find book</p>
            </div> 
        </div> 
        </div>
      <Footer/>
    </>
  );
}

export default Books;
