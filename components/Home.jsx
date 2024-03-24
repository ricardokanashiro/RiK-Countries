'use client'

import { useContext, useEffect } from 'react'

import Nav from '@/components/Nav'

import { ThemeContext } from '@/context/ThemeProvider'

const Home = ({ children }) => {

   const { darkModeEnabled, setDarkModeEnabled } = useContext(ThemeContext) 

   useEffect(() => {
      const root = document.documentElement;
      root?.style.setProperty(
         "--background-color",
         darkModeEnabled ? "hsl(207, 26%, 17%)" : "#fff"
      );

      root?.style.setProperty(
         "--text-color",
         darkModeEnabled ? "#fff" : "hsl(200, 15%, 8%)"
      );

      root?.style.setProperty(
         "--components-color",
         darkModeEnabled ? "hsl(209, 23%, 22%)" : "white"
      );
   }, [darkModeEnabled]);

   return (
      <body>

         <header>
            <Nav
               setDarkModeEnabled={setDarkModeEnabled}
               darkModeEnabled={darkModeEnabled}
            />
         </header>

         <main>
            {children}
         </main>

      </body>
   )
}

export default Home