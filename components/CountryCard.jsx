import Image from "next/image"
import { useRouter } from "next/navigation"

const CountryCard = ({ country }) => {
   const router = useRouter()

   return (
      <div 
         className="country-card cursor-pointer"
         onClick={() => { router.push(`/${country.alpha3Code}`) }}
      >

         <Image
            src={country.flag}
            width={40}
            height={40}
            className="country-flag"
         />

         <div className="country-info">

            <h3>{country.name}</h3>

            <p><span>Population:</span> {country.population}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital:</span> {country.capital}</p>

         </div>

      </div>
   )
}

export default CountryCard