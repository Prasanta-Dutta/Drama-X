import { useEffect, useState } from "react";
import { OPTIONS, VIDEO_URL } from "../utils/constant"

const useFetchMovieVideos = (movie_id) => {
    const [videoKey, setVideoKey] = useState();

    const fetchVideos = async () => {
        const data = await fetch(VIDEO_URL.replace("movie_id", movie_id.toString()), OPTIONS);
        const videos = await data.json();
        const video = videos?.results?.find((video) => video?.type === "Trailer");
        const videoKey = !video ? videos?.results[0].key : video?.key;

        setVideoKey(videoKey);
    }

    useEffect(() => {
        if(!movie_id)   return;
        fetchVideos();
    }, []);

    return videoKey;
};

export default useFetchMovieVideos;