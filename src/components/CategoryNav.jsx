import React from 'react'
import { icon1 } from '../assets/images'

const CategoryNav = () => {
  return (
    <section className='bg-[#F9F9F9] font-sans py-12'>
    <div className='grid grid-cols-3  md:grid-cols-5 container mx-auto'>
        <div className='flex items-center'>
        <img src={icon1} alt="" />
        <div>
            <p className='font-bold'>Armchairs</p>
            <span>124 products</span>
        </div>
        </div>

        <div className='flex items-center'>
        <img src={icon1} alt="" />
        <div>
            <p className='font-bold'>Armchairs</p>
            <span>124 products</span>
        </div>
        </div>

        <div className='flex items-center'>
        <img src={icon1} alt="" />
        <div>
            <p className='font-bold'>Armchairs</p>
            <span>124 products</span>
        </div>
        </div>
        <div className='flex items-center'>
        <img src={icon1} alt="" />
        <div>
            <p className='font-bold'>Armchairs</p>
            <span>124 products</span>
        </div>
        </div>
        <div className='flex items-center'>
        <img src={icon1} alt="" />
        <div>
            <p className='font-bold'>Armchairs</p>
            <span>124 products</span>
        </div>
        </div>
        
    </div>
</section>
  )
}

export default CategoryNav