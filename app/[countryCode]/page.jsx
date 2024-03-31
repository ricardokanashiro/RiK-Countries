'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

import { data } from "@/data.mjs"

const page = ({ params }) => {

   const [country, setCountry] = useState({})
   const [flagImage, setFlagImage] = useState('')
   const [countryCurrencies, setCountryCurrencies] = useState([])
   const [countryLanguages, setCountryLanguages] = useState([])
   const [border, setBorder] = useState([])

   useEffect(() => {
      setCountry(data.filter(country => country.alpha3Code === params.countryCode)[0])
      setFlagImage(data.filter(country => country.alpha3Code === params.countryCode)[0].flag)
      setCountryCurrencies(data.filter(country => country.alpha3Code === params.countryCode)[0].currencies)
      setCountryLanguages(data.filter(country => country.alpha3Code === params.countryCode)[0].languages)
      setBorder(data.filter(country => country.alpha3Code === params.countryCode)[0].borders)
   }, [])

   return (
      <section className="country-info-wrapper">

         <Image 
            src={flagImage}
            width={40}
            height={40}
            className="country-info-img"
         />

         <section className="country-data">

            <h1>{country.name}</h1>

            <div className="data-wrapper">

               <div>
                  <p><span>Native Name: </span>{country.nativeName}</p>
                  <p><span>Population: </span>{country.population}</p>
                  <p><span>Region: </span>{country.region}</p>
                  <p><span>Sub Region: </span>{country.subregion}</p>
                  <p><span>Capital: </span>{country.capital}</p>
               </div>

               <div>
                  <p><span>Top Level Domain: </span>{country.topLevelDomain}</p>
                  <p><span>Currencies: </span>{countryCurrencies.map(currency => (currency.name)) + " "}</p>
                  <p><span>Languages: </span>{countryLanguages.map(language => (language.name)) + " "}</p>
               </div>

            </div>

            <div className="flex gap-2 flex-wrap items-center">
               <p className="font-bold whitespace-nowrap">Border Countries: </p>

               {
                  border && border.map(country => (
                     <Link className="border-country" href={`/${country}`} >{country}</Link>
                  ))
               }
            </div>

         </section>

      </section>
   )
}

export default page