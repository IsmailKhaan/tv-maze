import React from 'react'

const ShowCard = ({ image, summary, rating }) => {
    let stars = []
    let unfilled = []

    const ratings = (rating) => {
        let rat = Math.floor(rating / 2)
        for (let i = 0; i < rat; i++) {
            stars.push(i)
        }
        return stars
    }
    const unFilledRatings = (rating) => {
        for (let i = 0; i < 5 - rating.length; i++) {
            unfilled.push(i)
        }
        return unfilled
    }
    ratings(rating)
    unFilledRatings(stars)
    return (
        <div className='flex flex-col gap-2 w-[160px] my-2'>
            <img className='rounded object-cover' style={{ width: '200px', height: '250px' }} src={image} alt='showcover' />
            <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                {stars.map(() => <p className='text-[#F79B34]'>★</p>)}
                {unfilled.map(() => <p>★</p>)}
            </div>
            <p className='text-sm'>{summary?.replace(/(<([^>]+)>)/gi, "").substring(0, 70)}...</p>
        </div>
    )
}

export default ShowCard