import Image from 'next/image'
import React from 'react'
import StarRating from '../StarRating/StarRating'
import { showCardHover } from './styles/HomeStyle'

const ShowCard = ({ key, image, summary, rating }) => {
    
    return (
        <div className={showCardHover}>
            <Image  className='rounded object-cover' width={200} height={250} src={image} alt='showcover' layout="responsive" loading="lazy" unobserve />

            <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                <StarRating key={key} rating={rating} />
            </div>
            <p className='text-sm'>{summary?.replace(/(<([^>]+)>)/gi, "").substring(0, 70)}...</p>
        </div>
    )
}

export default ShowCard

