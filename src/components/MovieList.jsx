import MovieCard from "./MovieCard";

const MovieList = ({ movieListTitle, movieListType, className = "" }) => {
    return (
        <div className={className}>
            <h1 className="text-3xl text-white font-bold px-[4%] py-2">{movieListTitle}</h1>
            <div className="overflow-x-scroll scrollbar-hide scroll-smooth snap-x snap-mandatory px-4">
                <div className="flex px-2 py-2">
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