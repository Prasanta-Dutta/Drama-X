import { useEffect } from "react";
import { NOW_PLAYING_MOVIE_URL, OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useFetchNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const fetchNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIE_URL, OPTIONS);
        const result = await data.json();
        const fetchedMovies = result?.results;
        dispatch(addNowPlayingMovies(fetchedMovies));
    }

    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);
};

export default useFetchNowPlayingMovies;