import React, { useState } from 'react'

const Footer = () => {
    const [value , setValue] = useState('');
    const [state , setState] = useState(false);
    // console.log(value);

    function setLoader(e){
        // localStorage.setItem('email', value);
        setTimeout(() => {
            setState(false);
            // console.log(value);
            setValue('');
            
        }, 2000);
        setState(true);
        e.preventDefault();
        const {target:{emailfield:{value}}} = e

        console.log(e.target.emailfield.value,'hiii');
    }
  return (
    <div className='w-full bg-[#F4F4F5] py-8 flex justify-center items-center gap-24 flex-col-reverse md:flex-row flex-wrap mx-auto max-w-[88rem]'>
        <div className='flex justify-center flex-col items-center md:items-start lg:w-1/4'>
            <img src="./images/Logo.svg" alt="" />
            <p className='pt-8'>Copyright © 2021 WEBBER.</p>
            <p className='pt-2'>All rights reserved</p>
            <div className='flex items-center justify-start mt-8'>
                <img src="./images/twt.png" alt="" />
                <img src="./images/youtube.png" alt=""  className='ml-4'/>
            </div>
        </div>
        <div className='flex flex-col items-center  md:items-start '>
            <p className='pb-2 text-2xl'>Company</p>
            <p className='pt-2 text-base'>About us</p>
            <p className='pt-2 text-base'>Blog</p>
            <p className='pt-2 text-base'>Contact us</p>
            <p className='pt-2 text-base'>Pricing</p>
            <p className='pt-2 text-base'>Testimonials</p>                  
        </div>
        <div className='flex justify-center flex-col items-center md:items-start '>
            <p className='pb-2 text-2xl'>Support</p>
            <p className='pt-2 text-base'>Help center</p>
            <p className='pt-2 text-base'>Terms of service</p>
            <p className='pt-2 text-base'>Legal</p>
            <p className='pt-2 text-base'>Privacy policy</p>
            <p className='pt-2 text-base'>Status</p>                  
        </div>
        <form className='flex justify-center flex-col md:justify-start' onSubmit={(e)=>setLoader(e)}>
            <p className='pb-2 text-2xl'>Get Updates and more</p>

            <div className='bg-white flex justify-between items-center'><input type="email" name='emailfield' placeholder='Enter your email' value={value} onChange={(e)=>setValue(e.target.value)} className='p-2 text-xs bg-transparent outline-none'  />



            <button className=" w-8 h-[2rem] text-center bg-gradient-to-r from-[#06B6D4] to-[#0284C7] p-2">
                <img src="./images/emailsend.png" alt=""   className={` ${ !state ? 'block' : 'hidden'}`}/>
                <img src="./images/loader.svg" className={`w-8 ${ !state ? 'hidden' : 'block'}`} alt=""/>  
            </button>
            </div>
                          
        </form>
        
    </div>
  )
}

export default Footer