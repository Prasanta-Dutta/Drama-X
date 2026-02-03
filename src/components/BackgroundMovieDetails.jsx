const BackgroundMovieDetails = ({title, overview}) => {
    return (
        <div className='w-full aspect-video relative py-[18%] px-[4%] bg-black bg-opacity-60'>
            <div className='text-6xl text-white mb-9 font-bold'>{title}</div>
            <div className='text-xl w-1/3 text-white font-semibold text-balance'>{overview}</div>
        </div>
    )
}

export default BackgroundMovieDetails;
