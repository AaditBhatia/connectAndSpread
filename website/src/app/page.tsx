import Image from 'next/image'
import HomePage from './components/homepage'
export default function Home() {
  return (
    <div>
       <HomePage />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Rest of the content */}
      </main>
    </div>
   
  )
}
