import React from 'react';
import Link from 'next/link';

const Desktoplinks = () => {
  return (
    <div>
    <ul className="absolute right-3 flex flex-row space-x-6 ">
      <li className="text-xl hover:text-blue-900 hover:font-semibold">
      <Link href="/">Home</Link>
      </li>
     <li className='text-xl hover:text-blue-900 hover:font-semibold'>
     <Link href="/about">About</Link>
     </li>
     <li className='text-xl hover:text-blue-900 hover:font-semibold'>
     <Link href="/contact">Contact</Link>
     </li>
     <li className='text-xl hover:text-blue-900 hover:font-semibold'>
     <Link href="/books">Books</Link>
     </li>
    </ul>
    </div>
  );
}

export default Desktoplinks;
