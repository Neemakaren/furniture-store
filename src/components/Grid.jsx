import React from 'react'
import { img } from '../assets/images'

const Grid = () => {
  return (
    <section className='bg-white my-10 py-10'> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-4 container mx-auto h-full">
            
        <div className="col-span-1 md:col-span-2 relative overflow-hidden group md:h-80">
                <img src={img} alt="" className="w-full h-full object-cover"/>
                
                    <button className="absolute rounded-sm bottom-0 left-0  py-2 px-6 bg-black text-white">
                    Bedroom
                    </button>
                
            </div>

            <div className="relative md:row-span-2 overflow-hidden shadow-lg group">
                <img src={img} alt="" className="w-full h-full object-cover"/>
                <button className="absolute rounded-sm bottom-0 left-0  py-2 px-6 bg-black text-white">
                    Bedroom
                    </button>
            </div>
        
            <div className="relative overflow-hidden shadow-lg group">
                <img src={img} alt="Technology" className="w-full h-full object-cover"/>
                <button className="absolute rounded-sm bottom-0 left-0  py-2 px-6 bg-black text-white">
                    Bedroom
                    </button>
            </div>
            <div className="relative overflow-hidden shadow-lg group">
                <img src={img} alt="Technology" className="w-full h-full object-cover"/>
                <button className="absolute rounded-sm bottom-0 left-0  py-2 px-6 bg-black text-white">
                    Bedroom
                    </button>
            </div>

           
          
        </div>
     </section>
  )
}

export default Grid