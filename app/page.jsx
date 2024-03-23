'use client'

import { useState, useEffect } from "react"

import CountryCard from "@/components/CountryCard"
import SearchArea from "@/components/SearchArea"

import { data } from "@/data.mjs"

const Home = () => {

   const [numRenContries, setNumRenContries] = useState(8)
   const [nameSearch, setNameSearch] = useState('')
   const [regionSearch, setRegionSearch] = useState('')

   let count = 0

   function handleNameSearch(e) {
      setNameSearch(e.target.value)
   }

   function handleRegionSearch(region) {
      setRegionSearch(region)
   }

   useEffect(() => {
      setNumRenContries(8)
   }, [nameSearch, regionSearch])

   return (
      <section className="lateral-spacing">
         <SearchArea 
            handleNameSearch={handleNameSearch}
            handleRegionSearch={handleRegionSearch}
         />
         
         <section className="flex flex-wrap flex-row gap-20 justify-evenly">
            {
               
               data.map(country => {

                  if(regionSearch !== '') {

                     if(regionSearch === country.region) {

                        if(nameSearch !== '') {

                           if(country.name.toLowerCase().includes(nameSearch.toLowerCase())) {
                              if(count < numRenContries) {
         
                                 count++
            
                                 return <CountryCard 
                                    country={country}
                                 />
            
                              } else {
                                 return
                              }
                           } else {
                              return
                           }
      
                        } else {
                           if(count < numRenContries) {
         
                              count++
         
                              return <CountryCard 
                                 country={country}
                              />
         
                           } else {
                              return
                           }
                        }
                     }
                  } else {

                     if(nameSearch !== '') {
                        if(country.name.toLowerCase().includes(nameSearch.toLowerCase())) {
                           if(count < numRenContries) {
         
                              count++
         
                              return <CountryCard 
                                 country={country}
                              />
         
                           } else {
                              return
                           }
                        } else {
                           return
                        }
   
                     } else {
                        if(count < numRenContries) {
      
                           count++
      
                           return <CountryCard 
                              country={country}
                           />
      
                        } else {
                           return
                        }
                     }
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