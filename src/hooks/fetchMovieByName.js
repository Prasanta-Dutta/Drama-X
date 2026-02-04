import { OPTIONS, SEARCH_BY_MOVIE_URL } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { addGptSearchResult } from "../utils/gptSlice";

const fetchMovieByName = (allMovies) => {
    // const { gptSearchResult, gptPreviousSearchResult } = useSelector((store) => store.gpt);
    // const dispatch = useDispatch();

    const fetchMovie = async (movieName) => {
        const jsonData = await fetch(SEARCH_BY_MOVIE_URL.replace("movie_name", movieName), OPTIONS);
        const data = await jsonData.json();
        return data;
    }

    const fn = async () => {
        const fetchedAllMovies = allMovies.map((movieName) => fetchMovie(movieName));
        const finalResult = await Promise.all(fetchedAllMovies);
        // dispatch(addGptSearchResult(finalResult));
        return finalResult;
    }

    if (!allMovies || allMovies.length === 0) return;
    
    return fn();
}

export default fetchMovieByName;