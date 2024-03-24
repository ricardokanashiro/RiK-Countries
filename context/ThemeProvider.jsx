'use client'

import { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
   const [darkModeEnabled, setDarkModeEnabled] = useState(false)

   return (
      <ThemeContext.Provider value={{darkModeEnabled, setDarkModeEnabled}}>
         {children}
      </ThemeContext.Provider>
   )
}

export default ThemeProvider