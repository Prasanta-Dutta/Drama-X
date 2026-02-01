import { useEffect } from "react";
import { NOW_PLAYING_MOVIE_URL, OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addupcomingMovies } from "../utils/movieSlice";

const useFetchMoviesListWise = () => {
    const movieList = ['now_playing', 'popular', 'top_rated', 'upcoming'];
    const actionMap = {
        now_playing: addNowPlayingMovies,
        popular: addPopularMovies,
        top_rated: addTopRatedMovies,
        upcoming: addupcomingMovies
    };
    const dispatch = useDispatch();

    const fetchMovieFromMovieList = async (listType) => {
        const jsonData = await fetch(NOW_PLAYING_MOVIE_URL.replace("now_playing", listType), OPTIONS);
        const data = await jsonData.json();

        if(!actionMap[listType])    return; 
        dispatch(actionMap[listType](data.results));
    };

    useEffect(() => {
        const fetchAllMovies = async () => {
            for (const listType of movieList) {
                await fetchMovieFromMovieList(listType);
            };
        };
        fetchAllMovies();
    }, []);


};

export default useFetchMoviesListWise;