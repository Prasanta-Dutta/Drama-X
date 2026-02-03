import { useSelector } from "react-redux";

const SearchResult = () => {
    const { gptSearchResult, gptPreviousSearchResult } = useSelector((store) => store.gpt);

    return(
        <div className="flex justify-center mt-5 text-3xl text-white">
            {
                !gptSearchResult 
                ?   !gptPreviousSearchResult 
                    ?   <h1 className="text-3xl text-white">Sorry ! No Search Histry Exist</h1> 
                    :   <h1 className="text-3xl text-white">Previous History Exist</h1>
                :   <h1 className="text-3xl text-white">Gpt Result</h1>
            }
        </div>
    )
};

export default SearchResult;