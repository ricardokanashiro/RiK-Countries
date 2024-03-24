import Image from 'next/image'

import moonIcon from '@/assets/moon-icon.svg'
import lightMoonIcon from '@/assets/moon-icon-light.svg'

const Nav = ({ setDarkModeEnabled, darkModeEnabled }) => {
   return (
      <nav className='lateral-spacing navbar'>
         <h1 className='main-title'>Where in the world?</h1>

         <button 
            className='flex items-center gap-1 sm:gap-2 md:gap-3 cursor-pointer'
            onClick={() => setDarkModeEnabled((prev) => !prev)}
         >
            {
               darkModeEnabled ? (
                  <Image 
                     src={lightMoonIcon}
                     width={20}
                     height={20}
                     className='moon-img'
                  />
               ) : (
                  <Image 
                     src={moonIcon}
                     width={20}
                     height={20}
                     className='moon-img'
                  />
               )
            }
            
            <h3 className='font-bold toggle-text'>Dark Mode</h3>
         </button>
      </nav>
   )
}

export default Nav