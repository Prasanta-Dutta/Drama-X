import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div>
            <ul className="h-full flex justify-between items-center mx-5 text-xl text-white">
                <Link to={"/"}><li className="mx-4 p-1 cursor-pointer hover:border-b-2">Home</li></Link>
                <Link to={"/about"}><li className="mx-4 p-1 cursor-pointer hover:border-b-2">About</li></Link>
                <li className="mx-4 p-1 cursor-pointer hover:border-b-2">Contact</li>
                <li className="mx-4 p-1 cursor-pointer hover:border-b-2">Support</li>
            </ul>
        </div>
    )
}