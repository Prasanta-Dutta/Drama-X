export const Navbar = () => {
    return(
        <div>
            <ul className="h-full flex justify-between items-center mx-5 text-xl text-white">
                <li className="mx-4 p-1 cursor-pointer hover:border-b-2">Home</li>
                <li className="mx-4 p-1 cursor-pointer hover:border-b-2">About</li>
                <li className="mx-4 p-1 cursor-pointer hover:border-b-2">Contact</li>
                <li className="mx-4 p-1 cursor-pointer hover:border-b-2">Support</li>
            </ul>
        </div>
    )
}