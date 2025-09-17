import { Logo2 } from "./Logo2";
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center absolute z-30 my-2">
                <div className="flex my-4 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900">
                    <Logo2 />
                    <Navbar />
                </div>
            </div>
        </div>
    )
};