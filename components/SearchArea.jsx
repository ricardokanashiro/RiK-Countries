'use client'

import { useState } from "react"
import Image from "next/image"

import arrowDown from '@/assets/arrow-down.svg'
import magnifyingGlass from '@/assets/magnifying-glass.svg'

const SearchArea = () => {

   const [menuActive, setMenuActive] = useState(false)

   return (
      <div className="flex justify-between w-full mb-16 gap-12 flex-col md:flex-row md:gap-12">

         <div className="search-input-wrapper gap-7 h-20">

            <Image src={magnifyingGlass} width={20} height={20} className="w-6" />

            <input 
               type="text"
               className="search-input"
               placeholder="Search for a country..."
            />

         </div>

         <nav className="flex flex-col gap-2 h-20 search-menu-wrapper">

            <button
               onClick={() => setMenuActive((prev) => !prev)}
               className="search-menu cursor-pointer flex gap-14"
            >
               <p className="text-xl font-semibold">Filter by Region</p>
               <Image src={arrowDown} width={20} height={20} className="w-4" />

            </button>

            {
               menuActive &&
               (
                  <div className="search-toggle-menu">
                     <button>África</button>
                     <button>America</button>
                     <button>Ásia</button>
                     <button>Europe</button>
                     <button>Oceania</button>

                  </div>
               )
            }

         </nav>

      </div>
   )
}

export default SearchArea