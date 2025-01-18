import React from 'react'

const FilterByCategories = ({handleChange}) => {
  return (
    <section className='flex flex-col w-100 justify-center font-sans sm:justify-start sm:w-80 md:flex-row lg:flex-col px-4'>
        <h4 className='mt-6 text-[20px] font-bold'>Filter by Categories</h4>
        <div className='sm:flex sm:flex-col sm:items-start sm:justify-start sm:w-50'>
<div class="inline-flex items-center w-full justify-between">
    <div className='flex'>
    <input type="checkbox" 
      className='ml-3'
      id="freelance" 
      name='white'
      value="white"
      onChange={handleChange}
      />
  {/* </label> */}
  <label class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none" htmlFor="freelance">
    Chairs
  </label>

    </div>
  <span className='border-2 flex items-center justify-center px-2  rounded-2xl'>10</span>
</div> 


<div class="inline-flex items-center w-full justify-between">
  <div className='flex'>
    <input type="checkbox" 
      className='ml-3'
      id="fulltime"
      name='black'
      value="black"
      onChange={handleChange}
      />
  {/* </label> */}
  <label class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none" htmlFor="fulltime">
    Beds
  </label>
  </div>
  <span className='border-2 flex items-center justify-center px-2  rounded-2xl'>10</span>
</div>


<div class="inline-flex items-center w-full justify-between">
  <div className='flex'>
    <input type="checkbox" 
      className='ml-3'
      id="internship" 
      name='grey'
      value="grey"
      onChange={handleChange}
      />
  {/* </label> */}
  <label class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none" htmlFor="internship">
  Cabinets
  </label>
  </div>
  <span className='border-2 flex items-center justify-center px-2  rounded-2xl'>10</span>
</div> 


<div class="inline-flex items-center w-full justify-between">
  <div className='flex'>
    <input type="checkbox" 
      className='ml-3'
      id="parttime" 
      name='brown'
      value="brown"
      onChange={handleChange}
      />
  {/* </label> */}
  <label class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none" htmlFor="parttime">
  Sofas
  </label>
  </div>
  <span className='border-2 flex items-center justify-center px-2  rounded-2xl'>10</span>
</div> 


<div class="inline-flex items-center w-full justify-between">
  <div className='flex'>
    <input type="checkbox" 
      className='ml-3'
      id="remote" 
      name='blue'
      value="blue"
      onChange={handleChange}
      />
  {/* </label> */}
  <label class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none" htmlFor="remote">
  Decor
  </label>
  </div>
  <span className='border-2 flex items-center justify-center px-2  rounded-2xl'>10</span>
</div> 


<div class="inline-flex items-center w-full justify-between">
  <div className='flex'>
    <input type="checkbox" 
      className='ml-3'
      id="temporary" 
      name='green'
      value="green" 
      onChange={handleChange}
      />
  {/* </label> */}
  <label class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none" htmlFor="temporary">
  Sale
  </label>
  </div>
  <span className='border-2 flex items-center justify-center px-2  rounded-2xl'>10</span>
</div> 
{/* <div class="inline-flex items-center">
    <input type="checkbox" 
      className='ml-3'
      id="volunteer" 
      name='vacancy'
      value="volunteer" 
      onChange={handleChange}
      />
  
  <label class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none" htmlFor="volunteer">
  Volunteer
  </label>
</div>  */}


        </div>
        </section>
  )
}

export default FilterByCategories