import { useEffect } from "react";
import { NOW_PLAYING_MOVIE_URL, OPTIONS } from "../utils/constant";

const useFetchMovieImages = () => {
    const fetchImages = async () => {
        const jsonData = await fetch(NOW_PLAYING_MOVIE_URL, OPTIONS);
        const data = await jsonData.json();

        console.log("Image Data: ", data);
    }

    useEffect(() => {
        fetchImages();
    }, []);
};

export default useFetchMovieImages;