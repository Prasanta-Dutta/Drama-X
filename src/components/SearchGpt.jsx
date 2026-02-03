import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const SearchGpt = () => {
    return (
        <div className="relative bg-black bg-opacity-90 w-full h-screen">
            <SearchBar />
            <SearchResult />
        </div>
    )
};

export default SearchGpt;