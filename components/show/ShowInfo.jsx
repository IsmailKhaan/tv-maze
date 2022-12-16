import { data } from 'autoprefixer'
import React from 'react'
import ShowInfoDesktop from './ShowInfoDesktop'
import ShowInfoMobile from './ShowInfoMobile'

const ShowInfo = ({ key, stream, day, time, status, genres }) => {
    return (
        <div className='lg:w-[42%] w-full md:m-2'>
            <p className='font-[600]'>Show Info</p>
            <ShowInfoDesktop key={key} stream={stream} day={day} time={time} status={status} genres={genres} />
            <ShowInfoMobile key={key} stream={stream} day={day} time={time} status={status} genres={genres} />
        </div >
    )
}

export default ShowInfo