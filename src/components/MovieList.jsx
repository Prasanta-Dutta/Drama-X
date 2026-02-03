import MovieCard from "./MovieCard";

const MovieList = ({ movieListTitle, movieListType, className = "" }) => {
    return (
        <div className={className}>
            <h1 className="text-3xl text-white font-bold pb-2">{movieListTitle}</h1>
            <div className="overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory">
                <div className="flex pb-2">
                    {
                        movieListType.map((movie) => {
                            return (
                                <MovieCard key={movie.id} movie={movie} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default MovieList;