import React, {useState} from 'react'

import { Link, animateScroll as scroll, } from 'react-scroll'

// Let's import some icons such as the 'Menu' icon and 'Close' icon :
import { MenuIcon, XIcon } from '@heroicons/react/outline';


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)


  return (
    
    <div className='w-screen h-20 z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                {/* Let's insert our Logo :*/}
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Learn Like Leon</h1>

                {/* Menu List :*/}

                <ul className='hidden md:flex'>

                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                    <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

                </ul>
            </div>

          
            {/*  Sign In Buttons :   */}

            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'> Sign In </button>
                <button className='px-8 py-3'> Sign Up </button>
            </div>

            {/*  
                Hamburger Menu : If the opposite of 'nav' is true then show the 'MenuIcon'. 
        
            */} 

            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
            
            </div>    

        </div>

        {/*  Let's style our dropdown Menu :   */} 

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar