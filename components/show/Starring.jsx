import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Starring = () => {
    const router = useRouter()
    const id = router.query.show
    const [data, setData] = useState()
    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}/cast`).then(response => {
            setData(response?.data)
        })
            .catch(error => {
                console.error(error);
            });
    }, [])
    return (
        <div className='lg:w-[42%] w-full md:m-2'>
            <p className='font-[600]'>Starring</p>
            <div className='hidden md:flex flex-col m-3'>
                {data?.map((cast) =>
                    <div>
                        <div className='flex items-center justify-between text-[14px] py-2'>
                            <img className='rounded-full min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover' src={cast?.person?.image?.original} alt='showcover' />
                            <div className='flex items-center w-[50%] justify-between'>
                            <p className='font-[500] ml-[-100px]'>{cast?.person?.name}</p>
                            <p className='text-gray-500'>{cast?.character?.name}</p>
                            </div>
                        </div>
                        <hr className='bg-gray-400 h-[2px]' />
                    </div>
                )}
            </div>
            <div className='md:hidden flex-col gap-2 my-3'>
                {data?.map((cast) =>
                    <div className='flex items-center gap-5   text-[14px] py-2'>
                        <img className='rounded-full min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] object-cover' src={cast?.person?.image?.original} alt='showcover' />
                        <div>
                            <p className='font-[500]'>{cast?.person?.name}</p>
                            <p className='text-gray-500'>{cast?.character?.name}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Starring