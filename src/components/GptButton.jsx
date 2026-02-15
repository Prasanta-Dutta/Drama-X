import { useDispatch } from "react-redux"
import { toggleGptShowingStatus } from "../utils/gptSlice";
import SearchIcon from "./SearchIcon";

const GptButton = () => {
    const dispatch = useDispatch();
    const handleGpt = () => {
        dispatch(toggleGptShowingStatus());
    }
    return (
        <button
            className="flex items-center text-lg text-white bg-rose-600 hover:bg-rose-700 rounded-md px-3 m-2"
            onClick={handleGpt}
        >
            GPT Search
            {/* <SearchIcon size={24} /> */}
        </button>
    )
};

export default GptButton;