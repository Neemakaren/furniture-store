import React from 'react'
import { img, contPhone, mail, mapPin, map } from '../assets/images'

const ContactUs = () => {
  return (
    <>
    <section className='font-sans relative'>
        <div className='w-full h-96'>
            <img src={img} alt="" className='w-full h-full object-cover'/>
        </div>


        <div className='container mx-auto'>
        <div className='items-center grid-cols-1 xl:grid-cols-2  py-10 grid gap-8 z-10 absolute -mt-44 bg-[#F6F4F2] container mx-auto'> 
        <div className='px-10 ml-10  flex flex-col justify-center'>
            <div className='pb-10'>
            <h4 className='text-[50px] font-bold'>Contact Us</h4>
            <p className='pb-6'>Suspendisse leo et cursus pharetra tellus tincidunt. Risus nulla penatibus donec elementum nulla</p>
            </div>

            <div className='flex flex-col justify-center gap-5'>
            <div>
                <p className='flex gap-2 opacity-50 text-[16px]'><img src={mapPin} alt="" />Physical address</p>
                <p className='font-bold text-[24px] pl-8'>60 Fremont Ave. Hamden, <br />
                CT 06514</p>
            </div>
            <div>
                <p className='flex gap-2 opacity-50 text-[16px]'><img src={contPhone} alt="" />Phone number</p>
                <p className='font-bold text-[24px] pl-8'>+437 402-2459</p>
            </div>
            <div>
                <p className='flex gap-2 opacity-50 text-[16px]'><img src={mail} alt="" />Email address</p>
                <p className='font-bold text-[24px] pl-8'>fStore@email.com</p>
            </div>
        </div>

            </div>

        <form action="" className='bg-white py-16 px-11 mx-14'>
            <h4>Get in touch</h4>
            <div className='flex sm:flex-row flex-col gap-2'>
                <div className='flex flex-col'>
                <label htmlFor="">Name</label>
            <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    className="pt-1 pb-1 pl-2 mb-5 border-2"
                    placeholder='your name...'
                />
                </div>

                <div className='flex flex-col'>
                <label htmlFor="">Phone</label>
            <input
                    type="number"
                    id="postTitle"
                    name="postTitle"
                    className="pt-1 pb-1 pl-2 mb-5 border-2"
                    placeholder='your phone number..'
                />

                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Email</label>
            <input
                    type="email"
                    id="postTitle"
                    name="postTitle"
                    className="pt-1 pb-1 pl-2 mb-5 border-2 placeholder-slate-400"
                    placeholder='your email...'
                />
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Message</label>
            <textarea
                    id="postContent"
                    name="postContent"
                    rows={5}
                    className="border-2 resize-none pl-2"
                    placeholder='your message...'
                />
            </div>
        <button className='bg-[#947458] px-10 py-3 text-[15px] rounded-sm text-white my-6'>Send Message</button>
        </form>

        </div>
        </div>

    </section>
    <div className='relative'>
        <img src={map} alt="" className=''/>

    </div>
    
    </>
  )
}

export default ContactUs