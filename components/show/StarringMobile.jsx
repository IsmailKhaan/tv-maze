import React from 'react'
import { starImgMobile, starringMobile } from './styles/ShowStyle'

const StarringMobile = ({ image, name, character }) => {
    return (
        <div className={starringMobile}>
            <img className={starImgMobile} src={image} alt='showcover' />
            <div>
                <p className='font-[500] text-[14px]'>{name}</p>
                <p className='text-gray-500 text-[12px]'>{character}</p>
            </div>
        </div>
    )
}

export default StarringMobile