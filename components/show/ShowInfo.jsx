import React from 'react'

const ShowInfo = (stream,day,time,status,genres) => {
    return (
        <div className='lg:w-[42%] w-full md:m-2'>
            <p className='font-[600]'>Show Info</p>
            <div className='flex md:flex-col gap-36 md:gap-0 md:m-3'>
                <div>
                    <div>
                        <div className='md:flex items-center justify-between  text-[14px] py-4'>
                            <p className='font-[500]'>Streamed on</p>
                            <p className='text-gray-500'>{stream}</p>
                        </div>
                        <hr className='bg-gray-400 h-[2px] hidden md:block' />
                    </div>
                    <div>
                    <div className='md:flex items-center justify-between  text-[14px] py-4'>
                            <p className='font-[500]'>Schedule</p>
                            <p className='text-gray-500'>{day}{" "}{time}</p>
                        </div>
                        <hr className='bg-gray-400 h-[2px] hidden md:block' />
                    </div>
                </div>
                <div>
                    <div>
                        <div className='md:flex items-center justify-between  text-[14px] py-4'>
                            <p className='font-[500]'>Status</p>
                            <p className='text-gray-500'>{status}</p>
                        </div>
                        <hr className='bg-gray-400 h-[2px] hidden md:block' />
                    </div>
                    <div>
                    <div className='md:flex items-center justify-between  text-[14px] py-4'>
                            <p className='font-[500]'>Genres</p>
                            {genres?.map((gen)=>
                            <p className='text-gray-500'>{gen}</p>
                            )}
                        </div>
                        <hr className='bg-gray-400 h-[2px] hidden md:block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowInfo