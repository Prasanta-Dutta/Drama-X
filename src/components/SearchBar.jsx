import { useEffect, useRef } from "react";
import { GoogleGenAI } from "@google/genai";
import { useDispatch } from "react-redux";
import { addGptPreviousSearchResult, addGptSearchResult, removeGptSearchResult } from "../utils/gptSlice";

const SearchBar = () => {
    const searchText = useRef();
    const ai = new GoogleGenAI({
        apiKey: process.env.REACT_APP_GEMINI_API_KEY,
        dangerouslyAllowBrowser: true,
    });
    const preQuery = "Here actually user want to be recomended for movie according to their mood/feelings/situation. So please suggest according to the Query: ";
    const postQuery = "Output: Provide exactly 5 movie names, comma-separated only. No explanation. As for example output should be like: andaaz aapna aapna, luka chupi, 3 idiots, raaz3, zid"
    const dispatch = useDispatch();

    const handleSearch = async () => {
        try {
            const userQuery = searchText?.current?.value;

            if(!userQuery.trim()) return;

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash-lite",
                contents: preQuery + userQuery + postQuery,
            });
            console.log(response.text);
            const movieName = response.text.trim().split(',').map((movie) => movie.trim());
            console.log(movieName);

            dispatch(addGptSearchResult(movieName));
            dispatch(addGptPreviousSearchResult(movieName));
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        return () => {
            dispatch(removeGptSearchResult());
        }
    }, [])

    return (
        <div className="flex justify-center w-full pt-[16%]">
            <input
                className="w-[60%] py-3 px-3 text-lg outline-none"
                type="text"
                placeholder="Search with gpt"
                ref={searchText}
            />
            <button
                className="text-xl text-white bg-rose-600 w-[10%] py-3 hover:bg-rose-700"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
};

export default SearchBar;