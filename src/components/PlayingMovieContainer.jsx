import { useSelector } from 'react-redux';
import BackgroundMovieDetails from './BackgroundMovieDetails'
import BackgroundMovieVideo from './BackgroundMovieVideo'

const PlayingMovieContainer = () => {
    const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
    if(!movies || movies.length === 0) return null;

    const backgroundMovie = movies[3];
    const movieId = backgroundMovie.id;
    const title = backgroundMovie?.original_title;
    const overview = backgroundMovie?.overview;

    return (
        <div>
            <BackgroundMovieVideo movieId={movieId} />
            <BackgroundMovieDetails title={title} overview={overview} />
        </div>
    )
}

export default PlayingMovieContainer;