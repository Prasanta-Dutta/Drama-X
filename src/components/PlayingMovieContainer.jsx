const PlayingMovieContainer = () => {
    return(
        <div className="">
            <iframe 
                className="w-screen h-screen pointer-events-none"
                src="https://www.youtube.com/embed/V0Fqdb-smqo?autoplay=1&mute=1&loop=1&playlist=V0Fqdb-smqo&controls=0&modestbranding=1&rel=0&playsinline=1"
                title="YouTube video player"
                allow="autoplay; encrypted-media;" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
};

export default PlayingMovieContainer;