import React from 'react'
import { img, star, ava } from '../assets/images'

const Reviews = () => {
  return (
     <section className='grid sm:grid-cols-2 font-sans items-center justify-center bg-[#F6F4F2]'>
            <div className='sm:ml-10 md:mr-20 md:ml-20 lg:ml-28 '>
                <h1 className='text-[20px] sm:text-[25px] md:text-[30px] xl:text-[40px] font-bold sm:mb-10  md:mb-8 lg:mb-4'>Customer Reviews </h1>
                <div className='flex my-4 gap-2'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <p className='md:leading-7'>Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut.
                 </p>
                 <p className='pt-4'>Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque
                scelerisque adipiscing
                . Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.</p>

                <div className='flex gap-5 items-center justify-start my-4'>
                    <img src={ava} alt="" />
                    <div className='flex flex-col'>
                        <span>Devon Simpson</span>
                        <span>customer</span>
                    </div>
                </div>
            </div>

            <div className='w-full h-full'>
                <img src={img} alt="" className='w-full h-full object-cover rounded-sm'/>
            </div>

        </section>
  )
}

export default Reviews