import React from 'react'
import { card2, ellipse1, ellipse2, ellipse3 } from '../assets/images'

const FeaturedProducts = () => {
  return (
    <section className='container mx-auto font-sans my-10'>
         <div className='flex justify-between items-center px-3 my-9'>
            <h1 className='font-bold text-[30px] md:text-[40px]'>Featured Products</h1>
            <button className='px-10 py-2 text-[14px] border-[1px] border-black rounded-sm font-medium'>View All</button>
        </div>
    <div className='grid items-center gap-5 my-6 grid-cols-2 sm:grid-cols-3 container mx-auto'>
   
            <div className='my-2'>
               <img src={card2} alt="" className='w-full p-4'/>
               <div className='px-4 py-2'>
                   <div className='flex items-center justify-between'>
               <p className='font-bold text-[18px]'>Modern Armchair</p>
   
               <div className='flex right-0 gap-2'>
                   <img src={ellipse1} alt="" />
                   <img src={ellipse2} alt="" />
                   <img src={ellipse3} alt="" />
   
               </div>
   
                   </div>
               <span className='text-[16px]'>$230</span>
               </div>
               </div>
   
   
            <div className=''>
               <img src={card2} alt="" className='w-full p-4'/>
               <div className='px-4 py-2'>
                   <div className='flex items-center justify-between'>
               <p className='font-bold text-[18px]'>Modern Armchair</p>
   
               <div className='flex right-0 gap-2'>
                   <img src={ellipse1} alt="" />
                   <img src={ellipse2} alt="" />
                   <img src={ellipse3} alt="" />
   
               </div>
   
                   </div>
               <span className='text-[16px]'>$230</span>
               </div>
               </div>
   
   
            <div className=''>
               <img src={card2} alt="" className='w-full p-4'/>
               <div className='px-4 py-2'>
                   <div className='flex items-center justify-between'>
               <p className='font-bold text-[18px]'>Modern Armchair</p>
   
               <div className='flex right-0 gap-2 '>
                   <img src={ellipse1} alt="" />
                   <img src={ellipse2} alt="" />
                   <img src={ellipse3} alt="" />
   
               </div>
   
                   </div>
               <span className='text-[16px]'>$230</span>
               </div>
               </div>
   
   
   
            {/* <div>
               <img src={card2} alt="" className='w-full'/>
               <div>
               <p className=' font-bold  text-[18px]'>Egg chair</p>
               <span className='text-[16px]'>$250</span>
               </div>
               </div>
            <div>
               <img src={card2} alt="" className='w-full'/>
               <div>
               <p className='font-bold  text-[18px]'>Chaise Lounge</p>
               <span className='text-[16px]'>$223</span>
               </div>
               </div> */}
   
           </div>
           </section>
  )
}

export default FeaturedProducts