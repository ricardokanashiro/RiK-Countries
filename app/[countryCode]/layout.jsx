'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

import { ThemeContext } from '@/context/ThemeProvider'

import arrowLeft from '@/assets/arrow-left.svg'
import arrowLeftLight from '@/assets/arrow-left-light.svg'

const layout = ({ children }) => {
   const router = useRouter()
   const { darkModeEnabled } = useContext(ThemeContext)

   return (
      <section className='lateral-spacing'>

         <section className='back-btn-wrapper'>
            <button onClick={() => router.push('/')}>
               {
                  darkModeEnabled ? (
                     <Image
                        src={arrowLeftLight}
                        className='arrow-left-img'
                     />
                  ) : (
                     <Image
                        src={arrowLeft}
                        className='arrow-left-img'
                     />
                  )
               }


               <p>Back</p>
            </button>
         </section>

         {children}

      </section>
   )
}

export default layout