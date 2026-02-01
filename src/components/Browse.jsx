import { useEffect } from "react";
import { MOVIE_FETCH_URL, OPTIONS } from "../utils/constant";
import BrowseHeader from "./BrowseHeader";
import MovieContainer from "./MovieContainer";
import Footer from "./Footer";
import useFetchMoviesListWise from "../hooks/useFetchMoviesListWise";


export const Browse = () => {
    useFetchMoviesListWise();
    return (
        <div className="relative ">
            <BrowseHeader />
            <MovieContainer />
            <Footer />
        </div>
    )
}