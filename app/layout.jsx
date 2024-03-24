import '@/css/main.css'

import Home from '@/components/Home'

import ThemeProvider from '@/context/ThemeProvider'

export const metadata = {
   title: 'RiK Countries',
   description: 'A webpage with countries information maded by Ricardo Kanashiro'
}

const RootLayout = ({ children }) => {
   return (
      <html lang="en">
         <ThemeProvider>
            <Home 
               children={children}
            />
         </ThemeProvider>
      </html>
   )
}

export default RootLayout