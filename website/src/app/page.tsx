import Image from 'next/image'
import HomePage from './components/Homepage'
import OurProjects from './components/OurProjects'
import AboutUs from './components/AboutUs'
import Donate from './components/Donate'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div>
       <HomePage />
       <AboutUs/>
       <OurProjects/>
       <Donate/>
       <Footer/>
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Rest of the content */
        } */
      {/* </main> */}
    </div>
   
  )
}
