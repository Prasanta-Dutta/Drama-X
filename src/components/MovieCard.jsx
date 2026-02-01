import { IMAGE_POSTER_PATH_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
    return (
        <div className="w-60 flex-shrink-0 snap-start hover:scale-105 transition-transform duration-300 mr-[3px]">
            <img
                src={IMAGE_POSTER_PATH_URL + movie.poster_path}
                title={movie.title}
            />
            <h1 className="text-white text-lg p-2">{movie.title}</h1>
        </div>
    )
};

export default MovieCard;