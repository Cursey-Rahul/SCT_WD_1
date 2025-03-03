import Link from 'next/link'
import React from 'react'
import { foodProducts } from '@/data';
import Image from 'next/image';

const categoryPage = () => {
  return (
    <div className='flex flex-wrap items-center'>
      {foodProducts.map((items)=>(
        <Link href={`/product/${items.id}`} key={items.id} className='h-[60vh] w-full md:w-1/2 lg:w-1/3 p-4 border-b-2 border-r-2 border-red-500 hover:bg-fuchsia-50 transition-all duration-300'>
            <div className='relative h-[85%] '>
            <Image className='object-contain p-4 hover:rotate-[20deg] duration-500 transition-all' src={items.img} alt='' fill/>
            </div>
          <div className='flex justify-between px-4 items-center text-red-500'>
          <h1 className='text-xl font-bold'>{items.title}</h1>
          <div className='flex justify-end items-center'>
          <span className='text-xl'>${items.price}</span>
          <button className='bg-red-500 ml-2 text-white p-2 rounded-lg text-base uppercase'>add to cart</button>
          </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default categoryPage