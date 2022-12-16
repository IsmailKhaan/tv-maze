import React from 'react'

const StarRating = ({ rating }) => {
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
        <>
            {stars.map(() => <p className='text-[#F79B34] text-[20px]'>★</p>)}
            {unfilled.map(() => <p className='text-[20px]'>★</p>)}
        </>
    )
}

export default StarRating