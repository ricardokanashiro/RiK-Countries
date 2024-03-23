import Image from 'next/image'

import moonIcon from '@/assets/moon-icon.svg'

const Nav = () => {
   return (
      <nav className='lateral-spacing flex justify-between items-center py-8 border border-b-1 border-gray-300 border-solid mb-16'>
         <h1 className='main-title'>Where in the world?</h1>

         <button className='flex items-center gap-1 sm:gap-2 md:gap-3 cursor-pointer'>
            <Image 
               src={moonIcon}
               width={20}
               height={20}
               className='moon-img'
            />
            <h3 className='font-bold toggle-text'>Dark Mode</h3>
         </button>
      </nav>
   )
}

export default Nav