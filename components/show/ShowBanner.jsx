import React from 'react'

const ShowBanner = ({ name, image, summary, rating }) => {
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
        <div className='lg:h-[45vh] bg-[#27221C]  py-10 px-4 md:px-20'>
            <p className='font-[600] tracking-[2px] text-white'>TV Bland</p>
            <div className='flex flex-wrap md:flex-nowrap  gap-16 text-gray-300 my-12 tracking-[.1px]'>
                <img className='rounded object-cover hidden md:block' style={{ width: '200px', height: '280px' }} src={image} alt='showcover' />
                <img className='rounded object-cover w-full md:hidden' src={image} alt='showcover' />
                <div className='flex flex-col gap-3 lg:w-[900px]'>
                    <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                        {stars.map(() => <p className='text-[#F79B34]'>★</p>)}
                        {unfilled.map(() => <p>★</p>)}
                        <p>{rating}/10</p>
                    </div>
                    <p className='text-2xl'>{name}</p>
                    <p className='text-sm'>{summary?.replace(/(<([^>]+)>)/gi, "")}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowBanner