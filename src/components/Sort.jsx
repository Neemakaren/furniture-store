import React from 'react'
import { card1 } from '../assets/images'

const Sort = () => {
  return (
    <section className='container mx-auto bg-white font-sans'>
    
            <div className='grid items-center gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3'>
                <div>
                <img src={card1} alt="" className='w-full'/>
                <div className='flex items-center justify-center flex-col mt-2'>
                    <p className='font-bold text-2xl'>Tables</p>
                    <span className='text-[16px]'>24products</span>
                </div>
                </div>
    
                <div >
                <img src={card1} alt="" className='w-full'/>
                <div className='flex items-center justify-center flex-col mt-2'>
                    <p className='font-bold text-2xl'>Tables</p>
                    <span className='text-[16px]'>24products</span>
                </div>
    
                </div>
                <div>
                <img src={card1} alt="" className='w-full'/>
                <div className='flex items-center justify-center flex-col mt-2'>
                    <p className='font-bold text-2xl'>Tables</p>
                    <span className='text-[16px]'>24products</span>
                </div>
    
                </div>
                <div>
                <img src={card1} alt="" className='w-full'/>
                <div className='flex items-center justify-center flex-col mt-2'>
                    <p className='font-bold text-2xl'>Tables</p>
                    <span className='text-[16px]'>24products</span>
                </div>
    
                </div>
                
            </div>
        </section>
  )
}

export default Sort