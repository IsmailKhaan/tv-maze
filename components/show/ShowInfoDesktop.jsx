import React from 'react'
import { line, showInfoData } from './styles/ShowStyle'

const ShowInfoDesktop = ({ stream, day, time, status, genres }) => {
    return (
        <div className='md:flex flex-col gap-0 m-3 hidden'>
            <div>
                <div className={showInfoData}>
                    <p className='font-[500]'>Streamed on</p>
                    <p className='text-gray-500'>{stream}</p>
                </div>
                <hr className={line} />
            </div>
            <div>
                <div className={showInfoData}>
                    <p className='font-[500]'>Schedule</p>
                    <p className='text-gray-500'>{day + ' ' + time}</p>
                </div>
                <hr className={line} />
            </div>
            <div>
                <div className={showInfoData}>
                    <p className='font-[500]'>Status</p>
                    <p className='text-gray-500'>{status}</p>
                </div>
                <hr className={line} />
            </div>
            <div className={showInfoData}>
                <p className='font-[500]'>Genres</p>
                <div className='flex flex-wrap'>
                    {genres?.map((gen) => (
                        <p className='text-gray-500' key={gen}>{gen}-</p>
                    ))}
                </div>
            </div>
            <hr className={line} />
        </div >
    )
}

export default ShowInfoDesktop