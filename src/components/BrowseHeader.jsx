import { useSelector } from "react-redux";
import { Logo2 } from "./Logo2"
import Logout from "./Logout"
import GptButton from "./GptButton";
import HomeButton from "./HomeButton";

const BrowseHeader = () => {
    const showGpt = useSelector((store) => store.gpt.gptShowingStatus);
    const existUser = useSelector((store) => store.user);

    return (
        <div className="flex w-full justify-between absolute z-50 p-3">
            <Logo2 />
            <div className="flex">
                {
                    existUser ? (showGpt ? <HomeButton /> : <GptButton />) : ""
                }
                {
                    existUser && <Logout />
                }
            </div>
        </div>
    )
};

export default BrowseHeader;