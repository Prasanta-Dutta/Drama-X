import { useDispatch, useSelector } from "react-redux";
import useFetchMovieByMovieName from "../hooks/useFetchMovieByMovieName";
import { useEffect } from "react";
import MovieList from "./MovieList";
import { removeGptSearchResult } from "../utils/gptSlice";

const SearchResult = () => {
    const {
        gptSearchResult,
        gptPreviousSearchResult,
        gptSearchMovieNames,
        gptPreviousSearchMovieNames
    } = useSelector((store) => store.gpt);
    const dispatch = useDispatch();

    // useFetchMovieByMovieName(gptPreviousSearchMovieNames);
    console.log("gptSearchResult", gptSearchResult);

    useEffect(() => {
        return () => {
            // dispatch(removeGptSearchResult());
        }
    }, []);


    return (
        <div className=" mt-5 text-3xl text-white">
            {
                !gptSearchResult
                    ? !gptPreviousSearchResult
                        ? <h1 className="text-3xl text-white text-center pb-40">Sorry ! No Search Histry Exist</h1>
                        :   <div className="bg-black bg-opacity-40 py-12">
                                {
                                    gptPreviousSearchResult.map((movie, index) => {
                                        return <MovieList key={index} className="px-6 mb-5" movieListTitle={movie?.results[0]?.original_title} movieListType={movie?.results} />
                                    })
                                }
                            </div>
                    : <div className="bg-black bg-opacity-40 py-12">
                        {
                            gptSearchResult.map((movie, index) => {
                                return <MovieList key={index} className="px-6 mb-5" movieListTitle={movie?.results[0]?.original_title} movieListType={movie?.results} />
                            })
                        }
                    </div>
            }
        </div>
    )
};

export default SearchResult;