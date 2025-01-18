import React from 'react'
import { card } from '../assets/images'

const Categories = () => {
  return (
    <section className='container mx-auto font-sans my-10'>
        <div className='flex justify-between items-center my-9'>
            <h1 className='font-bold text-[40px]'>Shop by Categories</h1>
            <button className='px-10 py-2 text-[14px] border-[1px] border-black rounded-sm font-medium'>View All</button>
        </div>

        <div className='grid items-center gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <div>
            <img src={card} alt="" className='w-full'/>
            <div>
                <p className='font-medium text-2xl'>Tables</p>
                <span className='text-[16px]'>24products</span>
            </div>

            </div>
            <div>
            <img src={card} alt="" className='w-full'/>
            <div>
                <p className='font-medium text-2xl'>Tables</p>
                <span className='text-[16px]'>24products</span>
            </div>

            </div>
            <div>
            <img src={card} alt="" className='w-full'/>
            <div>
                <p className='font-medium text-2xl'>Tables</p>
                <span className='text-[16px]'>24products</span>
            </div>

            </div>
            <div>
            <img src={card} alt="" className='w-full'/>
            <div>
                <p className='font-medium text-2xl'>Tables</p>
                <span className='text-[16px]'>24products</span>
            </div>

            </div>
            
        </div>
    </section>
  )
}

export default Categories