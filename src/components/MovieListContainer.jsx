import { useEffect } from "react";
import { IMAGE_POSTER_PATH_URL, MOVIE_IMAGE_URL, NOW_PLAYING_MOVIE_URL, OPTIONS } from "../utils/constant";
import useFetchMovieImages from "../hooks/useFetchMovieImages";
import useFetchMoviesListWise from "../hooks/useFetchMoviesListWise";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const MovieListContainer = () => {
    const allMovies = useSelector((store) => store.movie);
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } = allMovies;

    if (!nowPlayingMovies || !popularMovies || !topRatedMovies || !upcomingMovies) {
        return <p>Loading movies...</p>;
    }

    return (
        <div className="bg-black bg-opacity-80">
            <MovieList className={"relative -mt-64"} movieListTitle={"Now Playing"} movieListType={nowPlayingMovies} />
            <MovieList movieListTitle={"Popular"} movieListType={popularMovies} />
            <MovieList movieListTitle={"Top Rated"} movieListType={topRatedMovies} />
            <MovieList movieListTitle={"Upcoming"} movieListType={upcomingMovies} />
        </div>
    )
};

export default MovieListContainer;