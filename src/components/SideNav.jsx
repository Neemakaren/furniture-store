import React from 'react'
import { line, bus, seller } from '../assets/images'
import FilterByColor from './FilterByColor'
import FilterByCategories from './FilterByCategories'
import FilterByMaterial from './FilterByMaterial'

const SideNav = ({handleChange}) => {
  return (
    <nav>
        <span className='mt-6 text-[18px] font-bold'>Price: $99 - $9999</span>
        <FilterByCategories handleChange={handleChange}/>
        <FilterByColor handleChange={handleChange}/>
        <FilterByMaterial handleChange={handleChange}/>
        
        <div className=''>
            <h5 className='mt-6 text-[20px] font-bold'>Filter by Brand</h5>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-1'>
                <img src={bus} alt="" className=''/>
                <img src={bus} alt="" className=''/>
                <img src={bus} alt="" className=''/>
                <img src={bus} alt="" className=''/>
                <img src={bus} alt="" className=''/>
                <img src={bus} alt="" className=''/>
            </div>
        </div>

        <div className='mt-6'>
            <h5 className='mt-6 text-[20px] font-bold'>Best Sellers</h5>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                    <img src={seller} alt="" />
                    <div className=''>
                        <h5>classic Chair</h5>
                        <span>$43</span>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src={seller} alt="" />
                    <div>
                        <h5>classic Chair</h5>
                        <span>$43</span>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src={seller} alt="" />
                    <div>
                        <h5>classic Chair</h5>
                        <span>$43</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default SideNav