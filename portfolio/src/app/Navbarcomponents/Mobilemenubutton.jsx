import open from '../images/open.jpg';

function Mobilemenubutton({ onClick }) {
  return (
    <button className="absolute right-2 top-8 p-2 openbutton" onClick={onClick}>
     <img src={open.src} alt="" className='h-[32px]'/>
    </button>
  );
}

export default Mobilemenubutton;
