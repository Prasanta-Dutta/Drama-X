import { IMAGE_POSTER_PATH_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
    return (
        <div className="w-60 flex-shrink-0 snap-start hover:scale-105 transition-transform duration-300 mr-[3px]">
            <img
                className="w-60 h-80"
                src={IMAGE_POSTER_PATH_URL + movie?.poster_path}
                title={movie?.title || movie?.original_title}
                alt="Movie poster path"
            />
            <h1 className="text-white text-lg p-3">{movie?.title || movie?.original_title}</h1>
        </div>
    )
};

export default MovieCard;