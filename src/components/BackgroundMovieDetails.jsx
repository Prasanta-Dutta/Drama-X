import React from 'react'

const BackgroundMovieDetails = ({title, overview}) => {
    return (
        <div className='w-full aspect-video relative py-[20%] px-[4%] bg-black bg-opacity-50'>
            <div className='text-6xl text-white mb-9 font-bold'>{title}</div>
            <div className='text-xl w-1/3 text-white'>{overview}</div>
        </div>
    )
}

export default BackgroundMovieDetails;
