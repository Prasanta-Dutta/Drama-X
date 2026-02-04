import { useEffect } from "react";
import { OPTIONS, SEARCH_BY_MOVIE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { addGptSearchResult, addGptPreviousSearchResult, removeGptSearchResult } from "../utils/gptSlice";

const useFetchMovieByMovieName = (allMovies) => {
    const { gptSearchResult, gptPreviousSearchResult } = useSelector((store) => store.gpt);
    const dispatch = useDispatch();

    const fetchMovie = async (movieName) => {
        const jsonData = await fetch(SEARCH_BY_MOVIE_URL.replace("movie_name", movieName), OPTIONS);
        const data = await jsonData.json();
        return data;
    }

    const fn = async () => {
        const fetchedAllMovies = allMovies.map((movieName) => fetchMovie(movieName));
        const finalResult = await Promise.all(fetchedAllMovies);
        // console.log(finalResult);
        // if (gptSearchResult === null && gptPreviousSearchResult === null) {
        //     dispatch(addGptSearchResult(finalResult));
        //     dispatch(addGptPreviousSearchResult(finalResult));
        // }
        dispatch(addGptSearchResult(finalResult));
    }

    if (!allMovies || allMovies.length === 0) return;
    
    fn();


    // useEffect(() => {
    //     if (!allMovies || allMovies.length === 0) return;

    //     const fn = async () => {
    //         const fetchedAllMovies = allMovies.map((movieName) => fetchMovie(movieName));
    //         const finalResult = await Promise.all(fetchedAllMovies);
    //         // console.log(finalResult);
    //         if (gptSearchResult === null && gptPreviousSearchResult === null) {
    //             dispatch(addGptSearchResult(finalResult));
    //             dispatch(addGptPreviousSearchResult(finalResult));
    //         }
    //     }
    //     fn();

    //     return () => {
    //         dispatch(removeGptSearchResult());
    //     }

    // }, [allMovies]);
}

export default useFetchMovieByMovieName;