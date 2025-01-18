import React from 'react'
import { img } from '../assets/images'

const Affordable = () => {
  return (
    <section className='grid sm:grid-cols-2 font-sans items-center justify-center bg-[#F6F4F2]'>
        <div className='w-full h-full'>
            <img src={img} alt="" className='w-full h-full object-cover rounded-sm'/>
        </div>

        <div className='sm:ml-10 md:mr-20 md:ml-20 lg:ml-28 '>
            <h1 className='text-[20px] sm:text-[25px] md:text-[30px] xl:text-[40px] font-bold sm:mb-10  md:mb-8 lg:mb-12'>Affordable furniture for <br /> every home </h1>
            <p className='md:leading-7 md:text-[18px]'>Ultrices porttitor lacus sed condimentum nulla viverra. Maecenas sed nisi imperdiet sed lorem sed quis sagittis in. Auctor augue ut nec a quisque libero imperdiet velit ut. <br />
            Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac. Nulla dictum semper commodo </p>
        </div>
    </section>
  )
}

export default Affordable