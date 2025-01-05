import React from 'react';
import iglogo from '../images/instagramlogo.jpg';
import linkedin from '../images/linkedin-logo.jpg';

const footer = () => {
  return (
    <div>
        <div className=' mt-14 mb-6 text-center flex flex-col justify-center items-center'>
        <p>Copyright &copy; 2025 [if there is any copyright]</p>
        <div className='flex gap-8'>
        <img src={iglogo.src} alt="" className='h-[22px] mix-blend-multiply mt-4'/>
        <img src={linkedin.src} alt="" className='h-[22px] mix-blend-multiply mt-4'/>
        </div>
        </div>
    </div>
  );
}

export default footer;
