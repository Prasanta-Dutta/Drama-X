import { Logo2 } from "./Logo2"
import Logout from "./Logout"

const BrowseHeader = () => {
    return (
        <div className="flex w-full justify-between absolute z-10 p-3">
            <Logo2 />
            <Logout />
        </div>
    )
};

export default BrowseHeader;