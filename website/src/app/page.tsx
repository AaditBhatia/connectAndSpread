import Image from 'next/image'
import HomePage from './components/Homepage'
import AboutUs from './components/AboutUs'
export default function Home() {
  return (
    <div>
       <HomePage />
       <AboutUs/>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Rest of the content */
        }
      </main>
    </div>
   
  )
}
