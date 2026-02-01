import useFetchMovieVideos from "../hooks/useFetchMovieVideos";
import { PLAYING_MOVIE_URL_END, PLAYING_MOVIE_URL_START } from "../utils/constant";

const BackgroundMovieVideo = ({movieId}) => {
    const movieKey = useFetchMovieVideos(movieId);
    
    return(
        <div className="w-full aspect-video absolute z-0">
            <iframe 
                className="w-full aspect-video pointer-events-none"
                src={PLAYING_MOVIE_URL_START + movieKey?.toString() + PLAYING_MOVIE_URL_END}
                title="YouTube video player"
                allow="autoplay; encrypted-media;" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
};

export default BackgroundMovieVideo;