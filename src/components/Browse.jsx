import { useEffect } from "react";
import { MOVIE_FETCH_URL, OPTIONS } from "../utils/constant";
import BrowseHeader from "./BrowseHeader";
import MovieContainer from "./MovieContainer";
import Footer from "./Footer";


export const Browse = () => {
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const jsonData = await fetch('https://api.themoviedb.org/3/movie/'+550+'/videos?language=en-US', OPTIONS);
                const data = await jsonData.json();
                console.log(data);
            } 
            catch (error) {
                console.log(error);
            }
        }
        fetchMovie();

    }, []);

    return (
        <div className="">
            <BrowseHeader />
            <MovieContainer />
            <Footer />
        </div>
    )
}