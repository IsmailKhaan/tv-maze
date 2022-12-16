import React from 'react'
import StarRating from '../StarRating/StarRating'
import { imgDesktop, imgMobile, showBanner, showBannerText, showData } from './styles/ShowStyle'

const ShowBanner = ({ name, image, summary, rating }) => {
    return (
        <div className={showBanner}>
            <p className={showBannerText}>TV Bland</p>
            <div className={showData}>
                <img className={imgDesktop} style={{ width: '200px', height: '280px' }} src={image} alt='showcover' />
                <img className={imgMobile} src={image} alt='showcover' />
                <div className='flex flex-col gap-3 lg:w-[1000px]'>
                    <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                        <StarRating rating={rating} />
                        <p>{rating}/10</p>
                    </div>
                    <p className='text-2xl'>{name}</p>
                    <p className='text-sm hidden lg:block'>{summary?.replace(/(<([^>]+)>)/gi, "").substring(0, 660)}</p>
                    <p className='text-sm lg:hidden'>{summary?.replace(/(<([^>]+)>)/gi, "")}</p>
                </div>
            </div>
        </div>
    )
}

export default ShowBanner