
import { pizza } from '@/data'
import Image from 'next/image'
import React from 'react'
import Price from '@/components/Price';
const productPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-center items-center md:flex-row '>
      
        <div className='relative w-full md:w-1/2 h-1/2'>
          <Image src={pizza.img} alt=''fill className='object-contain' />
        </div>
        <div className=' text-red-400 w-full md:w-1/2 p-5 flex flex-col justify-center text-center items-center gap-8'>
          <h1 className='font-bold text-3xl'>{pizza.title}</h1>
          <p className=' text-xl'>{pizza.description}</p>
          <Price price={pizza.price} options={pizza.options} />
       </div>

    </div>
  )
}

export default productPage