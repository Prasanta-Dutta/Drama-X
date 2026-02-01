import MovieListContainer from "./MovieListContainer";
import PlayingMovieContainer from "./PlayingMovieContainer";

const MovieContainer = () => {
    return (
        <div>
            <PlayingMovieContainer />
            <MovieListContainer />
        </div>
    )
};

export default MovieContainer;