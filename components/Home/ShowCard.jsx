import Image from 'next/image'
import React from 'react'

const ShowCard = ({image,summary}) => {
    return (
        <div className='flex flex-col gap-2 w-[160px] my-2'>
            <img className='rounded object-cover' style={{width:'200px',height:'250px'}} src={image} alt='showcover' />
            <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
                <p>★</p>
            </div>
            <p className='text-sm'>{summary.replace(/<p>/g,"").replace(/<b>/g,"").replace(/<i>/g,"").replace("</p>","").replace('</b>',"").replace('</i>',"").substring(0,70)}...</p>
        </div>
    )
}

export default ShowCard