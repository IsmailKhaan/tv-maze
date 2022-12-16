import React from 'react'

const ShowBanner = ({name,image,summary}) => {
    return (
        <div className='md:h-[45vh] bg-[#27221C]  py-10 px-4 md:px-20'>
            <p className='font-[600] tracking-[2px] text-white'>TV Bland</p>
            <div className='flex flex-wrap md:flex-nowrap  gap-16 text-gray-300 py-10 tracking-[1px]'>
                <img className='rounded object-cover hidden md:block' style={{width:'200px',height:'280px'}} src={image} alt='showcover' />
                <img className='rounded object-cover w-full md:hidden'  src={image} alt='showcover' />
                <div className='flex flex-col gap-3 w-[600px]'>
                    <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                        <p>★</p>
                        <p>★</p>
                        <p>★</p>
                        <p>★</p>
                        <p>★</p>
                        <p>4.2/5</p>
                    </div>
                    <p className='text-2xl'>{name}</p>
                    <p className='text-sm'>{summary?.replace(/(<([^>]+)>)/gi, "")}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowBanner