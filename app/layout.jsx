import '@/css/main.css'

import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata = {
   title: 'RiK Countries',
   description: 'A webpage with countries information maded by Ricardo Kanashiro'
}

const RootLayout = ({ children }) => {
   return (
      <Provider>
         <html lang="en">
            <body>
               <header>
                  <Nav />
               </header>

               <main>
                  {children}
               </main>

            </body>

         </html>

      </Provider>
   )
}

export default RootLayout