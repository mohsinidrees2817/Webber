import React from 'react'


import '@fontsource/mulish';
import '@fontsource/mulish';

const CaseStudies = () => {
  return (
    <div className='bg-[#A5F3FC]/[.2] md:pt-10'>
    <div className='flex flex-col justify-center items-center'>
        <h1 className=' text-6xl md:8xl font-extrabold text-[#1F2937] font-mulish text-center'>CASE STUDIES</h1>
        <p className='text-xl font-normal text-[#52525B] mt-4 font-mulish text-center px-4' >See how leading organizations and freelance developers have used Webber to tackle <br className=' hidden md:block'/> different use cases and get ahead of the competition</p>
    </div>
    <div className='w-92 sm:w-96 h-12 sm:h-16 border-gray-300 border-2 m-auto mt-12 '>
    <div className='flex justify-between item-center px-4 py-2 sm:px-8 sm:py-4'>       
            <p className='mr-2 text-[#52525B] cursor-pointer'>Region: All <img src= './images/Icon.svg' alt="icon" className='inline' /></p>
            <p className='mr-2 text-[#52525B] cursor-pointer'>Industry: All <img src= './images/Icon.svg' alt="icon" className='inline' /></p>
            <p className='mr-2 text-[#52525B] cursor-pointer'>Type: All <img src= './images/Icon.svg' alt="icon" className='inline' /></p>
    </div>
    </div>
    <div className='mt-24 pb-24'>
    <div className='flex justify-center gap-16 flex-wrap '>
        <div className='mt-24 px-8'>
        <img src='./images/Cover1.png'/>
        <p className='text-[#52525B] mt-2 mb-1'>Technology - SaaS</p>
        <h2 className='text-#27272A font-extrabold font-mulish text-3xl'>Adobe Systems Inc</h2>
        <p className='text-[#52525B] mt-2 mb-2'>Learn how Adobe has leveraged Webber to consolidate its diverse <br /> range of services software</p>
        <p className='text-[#0E7490] cursor-pointer underline'>Read story <img src= './images/Icon2.png'className='inline'/></p>
        </div>
        <div className='px-8'>
        <img src='./images/Cover2.png'/>
        <p className='text-[#52525B] mt-2 mb-1'>Kanban Software</p>
        <h2 className='text-#27272A font-extrabold text-3xl'>Trello</h2>
        <p className='text-[#52525B] mt-2 mb-2'>Learn how Adobe has leveraged Webber to consolidate its diverse <br /> range of services software</p>
        <p className='text-[#0E7490] cursor-pointer underline'>Read story <img src= './images/Icon2.png'className='inline'/></p>
        </div>
    </div>
    <div className='flex justify-center gap-16 flex-wrap '>
        <div className='mt-24 px-8'>
        <img src='./images/Cover3.png'/>
        <p className='text-[#52525B] mt-2 mb-1'>Technology - SaaS</p>
        <h2 className='text-#27272A font-extrabold text-3xl'>Gutkowski, Schuppe and Pagac</h2>
        <p className='text-[#52525B] mt-2 mb-2'>Learn how Adobe has leveraged Webber to consolidate its diverse <br /> range of services software</p>
        <p className='text-[#0E7490] cursor-pointer underline'>Read story <img src= './images/Icon2.png'className='inline'/></p>
        </div>
        <div className='px-8'>
        <img src='./images/Cover4.png'/>
        <p className='text-[#52525B] mt-2 mb-1'>Airline</p>
        <h2 className='text-#27272A font-extrabold text-3xl'>Swiss Airline   </h2>
        <p className='text-[#52525B] mt-2 mb-2'>Learn how Adobe has leveraged Webber to consolidate its diverse <br /> range of services software</p>
        <p className='text-[#0E7490] cursor-pointer underline'>Read story <img src= './images/Icon2.png'className='inline'/></p>
        </div>
    </div>
    <div className='flex justify-center gap-16 flex-wrap '>
        <div className='mt-24 px-8'>
        <img src='./images/Cover5.png'/>
        <p className='text-[#52525B] mt-2 mb-1'>Technology - SaaS</p>
        <h2 className='text-#27272A font-extrabold text-3xl'>Adobe Systems Inc</h2>
        <p className='text-[#52525B] mt-2 mb-2'>Learn how Adobe has leveraged Webber to consolidate its diverse <br /> range of services software</p>
        <p className='text-[#0E7490] cursor-pointer underline'>Read story <img src= './images/Icon2.png'className='inline'/></p>
        </div>
        <div className='px-8'>
        <img src='./images/Cover6.png'/>
        <p className='text-[#52525B] mt-2 mb-1'>Kanban Software</p>
        <h2 className='text-#27272A font-extrabold text-3xl'>Mann and Sons</h2>
        <p className='text-[#52525B] mt-2 mb-2'>Learn how Adobe has leveraged Webber to consolidate its diverse <br /> range of services software</p>
        <p className='text-[#0E7490] cursor-pointer underline'>Read story <img src= './images/Icon2.png'className='inline'/></p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CaseStudies