import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StarringDesktop from './StarringDesktop'
import StarringMobile from './StarringMobile'

const Starring = () => {

    const [data, setData] = useState()
    useEffect(() => {
        let id = location.pathname.split('/').at(-1)
        axios.get(`https://api.tvmaze.com/shows/${id}/cast`).then(response => {
            setData(response?.data)
        })
            .catch(error => {
                console.error(error);
            });
    }, [])
    return (
        <div className='lg:w-[45%] w-full md:m-2'>
            <p className='font-[600]'>Starring</p>
            <div className='hidden md:flex flex-col m-3'>
                {data?.map((cast) =>
                    <StarringDesktop image={cast?.person?.image?.medium} name={cast?.person?.name} character={cast?.character?.name} />
                )}
            </div>
            <div className='md:hidden flex flex-col gap-4 my-3'>
                {data?.map((cast) =>
                    <StarringMobile image={cast?.person?.image?.medium} name={cast?.person?.name} character={cast?.character?.name} />
                )}
            </div>
        </div>
    )
}

export default Starring