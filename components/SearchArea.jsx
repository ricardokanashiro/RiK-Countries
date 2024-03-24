'use client'

import { useState, useContext } from "react"
import Image from "next/image"

import { ThemeContext } from '@/context/ThemeProvider'

import arrowDown from '@/assets/arrow-down.svg'
import arrowDownLight from '@/assets/arrow-down-light.svg'
import magnifyingGlass from '@/assets/magnifying-glass.svg'
import magnifyingGlassLight from '@/assets/magnifying-glass-light.svg'

const SearchArea = ({ handleNameSearch, handleRegionSearch }) => {

   const [menuActive, setMenuActive] = useState(false)
   const { darkModeEnabled } = useContext(ThemeContext)

   return (
      <div className="flex justify-between w-full mb-16 gap-12 flex-col md:flex-row md:gap-12">

         <div className="search-input-wrapper gap-7 h-20">

            {
               darkModeEnabled ? (
                  <Image src={magnifyingGlassLight} width={20} height={20} className="w-6" />
               ) : (
                  <Image src={magnifyingGlass} width={20} height={20} className="w-6" />
               )
            }

            <input 
               type="text"
               className="search-input"
               placeholder="Search for a country..."
               onChange={(e) => handleNameSearch(e)}
            />

         </div>

         <nav className="flex flex-col gap-2 h-20 search-menu-wrapper">

            <button
               onClick={() => setMenuActive((prev) => !prev)}
               className="search-menu cursor-pointer flex gap-14"
            >
               <p className="text-xl font-semibold">Filter by Region</p>

               {
                  darkModeEnabled ? (
                     <Image src={arrowDownLight} width={20} height={20} className="w-4" />
                  ) : (
                     <Image src={arrowDown} width={20} height={20} className="w-4" />
                  )
               }

            </button>

            {
               menuActive &&
               (
                  <div className="search-toggle-menu">
                     <button onClick={(e) => handleRegionSearch('Africa')}>Africa</button>
                     <button onClick={(e) => handleRegionSearch('Americas')}>America</button>
                     <button onClick={(e) => handleRegionSearch('Asia')}>Asia</button>
                     <button onClick={(e) => handleRegionSearch('Europe')}>Europe</button>
                     <button onClick={(e) => handleRegionSearch('Oceania')}>Oceania</button>

                  </div>
               )
            }

         </nav>

      </div>
   )
}

export default SearchArea