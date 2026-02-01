export const MOVIE_FETCH_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';
export const VIDEO_URL = 'https://api.themoviedb.org/3/movie/movie_id/videos';

export const PLAYING_MOVIE_URL_START = "https://www.youtube.com/embed/";
export const PLAYING_MOVIE_URL_END = "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1";

export const NOW_PLAYING_MOVIE_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const MOVIE_IMAGE_URL = "https://api.themoviedb.org/3/movie/{movie_id}/images";

export const IMAGE_POSTER_PATH_URL = "https://image.tmdb.org/t/p/w300";

export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGVlYjM5ZTBjMjkyNTZiMWMzYmYxOGE5MzliNDE2ZiIsIm5iZiI6MTc2OTI4MjUxNy4wMjgsInN1YiI6IjY5NzUxYmQ1YzlkZDU3NGE2YmEzNjk5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pOWBeRsMxtqX6emf-pNh5HobyRJPXvvbl1LudxZlWUc'
    }
};
