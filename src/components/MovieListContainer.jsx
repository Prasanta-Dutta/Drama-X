import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListContainer = () => {
    const allMovies = useSelector((store) => store.movie);
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } = allMovies;

    if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies) {
        return <p>Loading movies...</p>;
    }

    return (
        <div className="bg-black bg-opacity-90">
            <MovieList className={"relative -mt-64 px-6"} movieListTitle={"Now Playing"} movieListType={nowPlayingMovies} />
            <MovieList className="px-6" movieListTitle={"Popular"} movieListType={popularMovies} />
            <MovieList className="px-6" movieListTitle={"Top Rated"} movieListType={topRatedMovies} />
            <MovieList className="px-6" movieListTitle={"Upcoming"} movieListType={upcomingMovies} />
        </div>
    )
};

export default MovieListContainer;