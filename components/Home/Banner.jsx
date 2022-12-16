import React from 'react'
import { banner, bannerText, head } from './styles/HomeStyle'

const Banner = () => {
  return (
    <div className={banner}>
      <p className={head}>TV Bland</p>
      <p className={bannerText}>
        TV Shows and web series database.
        <br className='hidden md:block' />
        Create personalised schedules. Episode guid, cast, crew and
        <br className='hidden md:block' />
        character information.
      </p>
    </div>
  )
}

export default Banner