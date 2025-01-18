import React from 'react'
import { img, team, arrowRight } from '../assets/images'

const AboutUs = () => {
  return (
    <section className='font-sans'>
        {/* <div className='h-screen font-sans'>
            <img src={img} alt="" className='w-full h-[100%] object-cover aspect-auto'/>
        </div> */}

        <div className='container mx-auto'>
            <h1 className='font-bold text-[40px] flex items-center justify-center text-center'>Lectus morbi eget justo tellus facilisi orci <br /> venenatis aliquet. Egestas rutrum volutpat <br /> pretium curabitur scelerisque.</h1>

            <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 my-8'>
                <p className=' px-12 py-5'>Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna <br />
                Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. Pellentesque ipsum consequat velit blandit vel ornare augue magna</p>

                <p className='px-12 py-5'>Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla. 
                Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum. Mi tristique est nunc sapien orci tortor ac.<span>Read More</span></p>
                
            </div>
        </div>

        {/* <div className='h-screen font-sans'>
            <img src={img} alt="" className='w-full h-[100%] object-cover aspect-auto'/>
        </div> */}
        <div className='bg-[#F6F4F2]'>
        <div className='container mx-auto py-16 flex justify-between items-center bg-[#F6F4F2]'>
            <div>
            <h1 className='text-[40px] font-bold'>Live comfortably inside your home</h1>
            <span className='text-[16px] font-medium'>Est nulla tincidunt commodo massa. Nunc interdum cras id augue</span>
            </div>

            <button className='bg-[#947458] text-white px-5 py-2 rounded-sm'>Shop Now</button>
        </div>

        </div>

        <div className='grid items-center gap-5 my-6 grid-cols-1 md:grid-cols-2 container mx-auto'>
             <div className='font-sans bg-[#F6F4F2]'>
            <img src={img} alt="" className='w-full h-[100%] object-cover aspect-auto'/>

            <div className='px-8 py-20'>
                <h2 className='text-[40px] font-bold leading-tight'>Furniture that will last <br /> a lifetime</h2>
                <p className='opacity-65 text-[14px] leading-loose py-6'>Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque scelerisque adipiscing. 
Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac
. Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.</p>
<button className='bg-[#947458] text-white px-5 py-2 rounded-sm'>Learn More</button>
            </div>
        </div>
        
             <div className='bg-[#F6F4F2] font-sans'>
            <div className='px-8 py-20'>
                <h2 className='text-[40px] font-bold'>Live comfortably <br /> inside your home</h2>
                <p className='opacity-65 text-[14px] leading-loose py-6'>Ullamcorper sit lacus sed risus congue integer amet erat risus. Euismod lacus lectus a dignissim velit. Facilisi lorem vitae purus habitant ac neque scelerisque adipiscing. <br />
Tellus dui pharetra ut pellentesque posuere ut amet. Curabitur lectus viverra in sit tortor. Magnis tristique tristique blandit nunc tincidunt et duis adipiscing ac
. Nulla dictum semper commodo sit habitant nam neque vitae leo. Nibh vestibulum ac sollicitudin a quam mi. Quam dui ac risus egestas.</p>
<button className='bg-[#947458] text-white px-5 py-2 rounded-sm'>Shop Now</button>
            </div>
            <img src={img} alt="" className='w-full h-full object-cover aspect-auto '/>
        </div>
        </div>
            <div className='my-10 p-10'>
            <h1 className='text-[50px] my-8 font-bold text-center'>Our Team</h1>

        <div className='grid items-center gap-5 grid-cols-3 container mx-auto'>
            
            <div>
                <img src={team} alt="" />
                <div className='text-center'>
                    <p className='font-bold text-[18px]'>Ian Dyer</p>
                    <span className='opacity-50'>Consultant</span>
                </div>
            </div>
            <div>
                <img src={team} alt="" />
                <div className='text-center'>
                    <p className='font-bold text-[18px]'>Ian Dyer</p>
                    <span className='opacity-50'>Consultant</span>
                </div>
            </div>
            <div>
                <img src={team} alt="" />
                <div className='text-center'>
                    <p className='font-bold text-[18px]'>Ian Dyer</p>
                    <span className='opacity-50'>Consultant</span>
                </div>
            </div>
        </div>

            </div>
{/* 
          <div className='h-screen font-sans'>
            <img src={img} alt="" className='w-full h-[100%] object-cover aspect-auto'/>
        </div> */}


        <div className='grid items-center gap-5 my-6 grid-cols-2 container mx-auto bg-[#F6F4F2] p-8'>
        <div className=' font-sans'>
            <img src={img} alt="" className='w-full h-[100%] object-cover aspect-auto'/>
       
        <div className='my-6'> 
            <p className='font-bold text-[24px]'>New Collection quisque libero</p>
            <span className='opacity-50'>Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum</span>
            <p className='flex gap-2 items-center font-bold'>shop now <img src={arrowRight} alt="" className='w-4'/></p>
        </div>

        </div>
        <div className=' font-sans'>
            <img src={img} alt="" className='w-full h-[100%] object-cover aspect-auto'/>
       
        <div className='my-6'>
            <p className='font-bold text-[24px]'>New Collection quisque libero</p>
            <span className='opacity-50'>Est nulla tincidunt commodo massa. Nunc interdum cras id augue. Tortor cras pharetra ac dignissim hendrerit fames fermentum</span>
            <p className='flex gap-2 items-center font-bold'>shop now <img src={arrowRight} alt="" className='w-4'/></p>
        </div>
        </div>
        </div>

        <h1 className='text-[40px] font-bold container mx-auto'>Follow Us on Instagram</h1>
        <div className='grid items-center gap-5 my-6 grid-cols-5 container mx-auto'>
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
        </div>
    </section>
  )
}

export default AboutUs