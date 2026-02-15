import { useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { useDispatch } from "react-redux";
import { addGptSearchMovieNames, addGptSearchResult, swapCurrentMoviesToPreviousMovies } from "../utils/gptSlice";
import fetchMovieByName from "../hooks/fetchMovieByName";

const SearchBar = () => {
    const searchText = useRef();
    const ai = new GoogleGenAI({
        apiKey: process.env.REACT_APP_GEMINI_API_KEY,
        dangerouslyAllowBrowser: true,
    });
    const preQuery = "Act as a movie recommended system. Here actually user want to be recomended for movie according to their mood/feelings/situation. So please suggest according to the query. \nQuery: ";
    const postQuery = "Output: Provide exactly 5 movie names, comma-separated only. No explanation. As for example output should be like: andaaz aapna aapna, luka chupi, 3 idiots, raaz3, zid"
    const dispatch = useDispatch();

    const handleSearch = async () => {
        try {
            const userQuery = searchText?.current?.value;

            if (!userQuery.trim()){
                console.log("Won't call api");
                return;
            }

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-lite",
                contents: preQuery + userQuery + postQuery,
            });

            const movieNames = response.text.trim().split(',').map((movie) => movie.trim());
            dispatch(addGptSearchMovieNames(movieNames));
            const allFetchedMovies = await fetchMovieByName(movieNames);
            dispatch(addGptSearchResult(allFetchedMovies));
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return () => {
            dispatch(swapCurrentMoviesToPreviousMovies());
        }
    }, [])

    return (
        <form 
            className="flex justify-center w-full pt-[16%] pb-[12%]"
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
        >
            <input
                className="w-[60%] py-3 px-3 text-lg outline-none"
                type="text"
                placeholder="Search with gpt"
                ref={searchText}
            />
            <button
                className="text-xl text-white bg-rose-600 w-[10%] py-3 hover:bg-rose-700"
                type="submit"
            >
                Search
            </button>
        </form>
    )
};

export default SearchBar;