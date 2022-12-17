import Link from 'next/link'
import React from 'react'
import StarRating from '../StarRating/StarRating'
import { imgDesktop, imgMobile, showBanner, showBannerText, showData } from './styles/ShowStyle'

const ShowBanner = ({ key, name, image, summary, rating }) => {
    return (
        <div className={showBanner}>
            <div className='flex items-center gap-4'>
                <Link href="/">
                    <svg class="h-8 w-8 hover:bg-slate-500 hover:rounded-full hover:bg-opacity-25 p-1 opacity-50 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
                <p className={showBannerText}>TV Bland</p>
            </div>
            <div className={showData}>
                <img className={imgDesktop} style={{ width: '200px', height: '280px' }} src={image} alt='showcover' />
                <img className={imgMobile} src={image} alt='showcover' />
                <div className='flex flex-col gap-3 lg:w-[1000px]'>
                    <div className='flex items-center gap-1 text-[14px] text-gray-500'>
                        <StarRating key={key} rating={rating} />
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