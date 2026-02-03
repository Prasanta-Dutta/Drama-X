import { useEffect } from "react";
import { MOVIE_FETCH_URL, OPTIONS } from "../utils/constant";
import BrowseHeader from "./BrowseHeader";
import MovieContainer from "./MovieContainer";
import Footer from "./Footer";
import useFetchMoviesListWise from "../hooks/useFetchMoviesListWise";
import { useSelector } from "react-redux";
import SearchGpt from "./SearchGpt";


export const Browse = () => {
    useFetchMoviesListWise();
    const showGpt = useSelector((store) => store.gpt.gptShowingStatus);
    return (
        <div className="relative ">
            <BrowseHeader />
            {
                !showGpt
                    ?   <MovieContainer />
                    :   <SearchGpt />
            }

            <Footer />
        </div>
    )
}