import { useDispatch } from "react-redux";
import { toggleGptShowingStatus } from "../utils/gptSlice";

const HomeButton = () => {
    const dispatch = useDispatch();

    const handleHome = () =>{
        dispatch(toggleGptShowingStatus());
    }

    return (
        <button
            className="text-lg text-white bg-rose-600 hover:bg-rose-700 rounded-md px-3 m-2"
            onClick={handleHome}
        >
            Home
        </button>
    )
};

export default HomeButton;