import React from 'react'
import { starImgDesktop, starringDataDesktop, starringDesktop } from './styles/ShowStyle'

const StarringDesktop = ({ image, name, character }) => {
    return (
        <div>
            <div className={starringDesktop}>
                <img className={starImgDesktop} src={image} alt='showcover' />
                <div className={starringDataDesktop}>
                    <p className='font-[500] ml-[-100px]'>{name}</p>
                    <p className='text-gray-500'>{character}</p>
                </div>
            </div>
            <hr className='bg-gray-400 h-[2px]' />
        </div>
    )
}

export default StarringDesktop