import Image from 'next/image'
import Navbar from '@/components/Navbar'
import HeroImage from '@/components/HeroImage'

export default function Home() {
  return (
    <div className='justify-center w-full  flex flex-col'>
      <Navbar />
      <HeroImage />
    </div>
  )
}
