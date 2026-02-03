import { useDispatch, useSelector } from "react-redux";
import { Logo2 } from "./Logo2"
import Logout from "./Logout"
import { toggleGptShowingStatus } from "../utils/gptSlice";
import GptButton from "./GptButton";
import HomeButton from "./HomeButton";

const BrowseHeader = () => {
    const showGpt = useSelector((store) => store.gpt.gptShowingStatus);
    const dispatch = useDispatch();
    const handleGpt = () => {
        dispatch(toggleGptShowingStatus());
    }

    return (
        <div className="flex w-full justify-between absolute z-10 p-3">
            <Logo2 />
            <div className="flex">
                {
                    !showGpt ? <GptButton /> : <HomeButton />
                }
                <Logout />
            </div>
        </div>
    )
};

export default BrowseHeader;