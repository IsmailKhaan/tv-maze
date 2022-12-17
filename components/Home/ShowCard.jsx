import Image from 'next/image'
import React from 'react'
import StarRating from '../StarRating/StarRating'
import convertImage from '../utils/blur-bg'
import { showCardHover } from './styles/HomeStyle'

const ShowCard = ({ key, image, summary, rating }) => {

    const toBase64 = (str) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);

    return (
        <div className={showCardHover}>
            <Image className='rounded object-cover' placeholder='blur' blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(700, 475)
            )}`}
                width={200} height={250} src={image} alt='' layout="responsive" loading="lazy" unobserve />

            <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                <StarRating key={key} rating={rating} />
            </div>
            <p className='text-sm'>{summary?.replace(/(<([^>]+)>)/gi, "").substring(0, 70)}...</p>
        </div>
    )
}

export default ShowCard

