import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShowBanner from '../../components/show/ShowBanner'
import ShowDetail from '../../components/show/ShowDetail'

const show = () => {
  
  const [data, setData] = useState()
  useEffect(() => {
    let id = location.pathname.split('/').at(-1)
    axios.get(`https://api.tvmaze.com/shows/${id}`).then(response => {
      setData(response?.data)
    })
      .catch(error => {
        console.error(error);
      });
  }, [])
  return (
    <>
      <ShowBanner key={data?.id} rating={data?.rating?.average} name={data?.name} image={data?.image?.original} summary={data?.summary} />
      <ShowDetail key={data?.id} stream={data?.network?.name} day={data?.schedule?.days[0]} time={data?.schedule?.time} status={data?.status} genres={data?.genres} />
    </>
  )
}

export default show