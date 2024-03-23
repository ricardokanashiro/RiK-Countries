'use client'

import { useState } from "react"

import CountryCard from "@/components/CountryCard"
import SearchArea from "@/components/SearchArea"

import { data } from "@/data.mjs"

const Home = () => {

   const [numRenContries, setNumRenContries] = useState(8)
   let count = 0

   return (
      <section className="lateral-spacing">
         <SearchArea />
         
         <section className="flex flex-wrap flex-row gap-24">
            {
               
               data.map(country => {

                  if(count < numRenContries) {

                     count++

                     return <CountryCard 
                        country={country}
                     />

                  } else {
                     return
                  }

               })
            }

         </section>

         <section className="more-btn-wrapper">
            <button onClick={() => setNumRenContries((prev) => prev + 8)}>Show more</button>
         </section>


      </section>
   )
}

export default Home