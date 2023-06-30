import Image from 'next/image'
import HomePage from './components/Homepage'
import OurProjects from './components/OurProjects'
export default function Home() {
  return (
    <div>
       <HomePage />
       <OurProjects/>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Rest of the content */
        }
      </main>
    </div>
   
  )
}
