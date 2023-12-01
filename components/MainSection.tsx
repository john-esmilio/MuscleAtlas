import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainSection = () => {
  return (
    <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-60 before:z-10">
      <Image src="/img2.png" alt="Banner" className="absolute inset-0 w-full h-full object-fill" fill={true}/>
      <div className="min-h-[600px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Embrace greatness</h2>
        <p className="text-lg text-center text-gray-200">Choose different workouts to create the new you. </p>
        <Link href="/"
          className="create_btn mt-8 bg-transparent text-base font-semibold py-2.5 px-6 border-2">
          Workouts
        </Link>
      </div>
      
    </div>
    
  )
}

export default MainSection