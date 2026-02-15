import { useSelector } from "react-redux";
import { useEffect } from "react";
import MovieList from "./MovieList";

const SearchResult = () => {
    const {
        gptSearchResult,
        gptPreviousSearchResult,
    } = useSelector((store) => store.gpt);

    useEffect(() => {
        return () => {
            //  All unmounting work done on <SearchBar /> useEffect(), so no need of it.
        }
    }, []);


    return (
        <div className=" mt-5 text-3xl text-white">
            {
                !gptSearchResult
                    ? !gptPreviousSearchResult
                        ? <h1 className="text-3xl text-white text-center pb-40">Sorry 😔 ! No Search History Exist</h1>
                        :   <div className="bg-black bg-opacity-40 py-12">
                            <h1 className="w-fit mx-auto text-2xl text-white bg-rose-500 rounded-md py-4 px-16 -mt-20 mb-16">Previously Searching For </h1>
                                {
                                    gptPreviousSearchResult.map((movie, index) => {
                                        return <MovieList key={index} className="px-6 mb-5" movieListTitle={movie?.results[0]?.original_title} movieListType={movie?.results} />
                                    })
                                }
                            </div>
                    : <div className="bg-black bg-opacity-40 py-12">
                        <h1 className="w-fit mx-auto text-2xl text-white bg-rose-500 rounded-md py-4 px-16 -mt-20 mb-16">Your Search Results </h1>
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