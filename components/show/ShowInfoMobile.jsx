import React from 'react'
import { cast } from './styles/ShowStyle'

const ShowInfoMobile = ({ stream, day, time, status, genres }) => {
  return (
    <div className='md:hidden'>
    <div className='flex  gap-36'>
        <div>
            <div className={cast}>
                <p className='font-[500]'>Streamed on</p>
                <p className='text-gray-500'>{stream}</p>
            </div>
        </div>
        <div>
            <div className={cast}>
                <p className='font-[500]'>Schedule</p>
                <p className='text-gray-500'>{day + ' ' + time}</p>
            </div>
        </div>
    </div>
    <div className='flex gap-48'>
        <div>
            <div className={cast}>
                <p className='font-[500]'>Status</p>
                <p className='text-gray-500'>{status}</p>
            </div>
        </div>
        <div className={cast}>
            <p className='font-[500]'>Genres</p>
            <div className='flex flex-col'>
                {genres?.map((gen) => (
                    <p className='text-gray-500' key={gen}>{gen}</p>
                ))}
            </div>
        </div>
    </div>
</div >
  )
}

export default ShowInfoMobile