import React from 'react';
import Link from 'next/link';
import close from '../images/close.jpg';


function MobileDrawer({ isOpen, onClose }) {
    return (
      <div
        className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button className="absolute right-8 top-4 p-3" onClick={onClose}>
           <img src={close.src} alt="" className='h-[40px]' />
          
        </button>
        <ul className="flex flex-col justify-center items-center space-y-4">
          <li className="text-3xl hover:text-blue-900 hover:font-semibold" onClick={onClose}>
              <Link href="/">Home</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold" onClick={onClose} >
             <Link href="/about">About</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold"  onClick={onClose}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-3xl hover:text-blue-900 hover:font-semibold"  onClick={onClose}>
            <Link href="/books">Books</Link>
          </li>
         
        </ul>
      </div>
    );
  }

export default MobileDrawer;
