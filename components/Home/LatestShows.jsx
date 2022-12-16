import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ShowCard from './ShowCard'

const LatestShows = () => {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows').then(response => {
      setData(response?.data)
    })
      .catch(error => {
        console.error(error);
      });
  }, [])
  return (
    <div className='mx-4 md:mx-20 mt-0 md:mt-[-150px]'>
      <p className='text-[20px] py-5 tracking-[2px] md:text-white'>Last Added Shows</p>
      <div className='flex flex-wrap md:justify-between gap-8'>
        {data?.map((data) =>
          <Link href={'show/' + data?.id}>
            <ShowCard key={data?.id} image={data?.image?.original} summary={data?.summary} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default LatestShows