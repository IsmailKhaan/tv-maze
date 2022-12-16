import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ShowCard from './ShowCard'
import DownPagination from '../Pagination/DownPagination';

const LatestShows = () => {
  var [page, setPage] = useState(1)
  const [data, setData] = useState()
  var lastPage = data ? (data.length / 18) : 0;
  var [tempData, settempData] = useState([])
  var limit = 18;
  useEffect(() => {
    if (localStorage.getItem("page")) {
      setPage(parseInt(localStorage.getItem("page")));
    }
    axios.get('https://api.tvmaze.com/shows').then(response => {
      setData(response?.data)
    })
      .catch(error => {
        console.error(error);
      });
  }, [])

  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows').then(response => {
      setData(response?.data)
    })
      .catch(error => {
        console.error(error);
      });
  }, [page, data?.length])

  useEffect(() => {
    tempData.splice(0, tempData.length);
    if (data?.length) {
      for (var i = (page - 1) * limit; i < limit * page; i++) {
        tempData.push(data?.[i])
      }
    }
  }, [page, data?.length])

  return (
    <>
      <div className='mx-4 md:mx-20 mt-0 md:mt-[-10%]'>
        <p className='text-[20px] py-5 tracking-[2px] lg:text-white'>Last Added Shows</p>
          <div className='flex flex-wrap justify-center gap-8'>
            {tempData?.map((data) =>
              <Link href={'show/' + data?.id} key={data?.id}>
                <ShowCard page={page} key={data?.id} image={data?.image?.original} rating={data?.rating?.average} summary={data?.summary} />
              </Link>
            )}
        </div>
      </div>
      {
        tempData && tempData.length &&
        <div className="ml-4 flex justify-center" >
          <DownPagination
            list={5}
            page={page}
            setPage={setPage}
            lastPage={Math.ceil(data?.length / limit)}
          />
        </div>
      }
    </>
  )
}

export default LatestShows