import React from 'react'
import StarRating from '../StarRating/StarRating'
import { showCardHover } from './styles/HomeStyle'

const ShowCard = ({ key, image, summary, rating }) => {
    
    return (
        <div className={showCardHover}>
            <img className='rounded object-cover' style={{ width: '200px', height: '250px' }} src={image} alt='showcover' />
            <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                <StarRating key={key} rating={rating} />
            </div>
            <p className='text-sm'>{summary?.replace(/(<([^>]+)>)/gi, "").substring(0, 70)}...</p>
        </div>
    )
}

export default ShowCard