'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import arrowLeft from '@/assets/arrow-left.svg'

const layout = ({ children }) => {
   const router = useRouter()

   return (
      <section className='lateral-spacing'>

         <section className='back-btn-wrapper'>
            <button onClick={() => router.push('/')}>
               <Image
                  src={arrowLeft}
                  className='arrow-left-img'
               />

               <p>Back</p>
            </button>
         </section>

         {children}

      </section>
   )
}

export default layout