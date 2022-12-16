import React from 'react'

const Banner = () => {
  return (
    <div className='md:h-[45vh] bg-[#27221C]  py-10 px-4 md:px-20'>
      <p className='font-[600] tracking-[2px] text-white'>TV Bland</p>
      <p className='text-gray-300 py-10 tracking-[1px]'>
        TV Shows and web series database.
        <br className='hidden md:block' />
        Create personalised schedules. Episode guid, cast, crew and
        <br className='hidden md:block' />
        character information.
      </p>
    </div>
  )
}

export default Banner