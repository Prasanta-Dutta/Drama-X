const Footer = () => {
    return (
        <div className="w-full flex justify-evenly bg-black bg-opacity-90 text-white p-12 mt-3">
            <div className="text-md text-white m-5 p-5">
                <ul>
                    <li className="mb-3  underline cursor-pointer">FAQ</li>
                    <li className="mb-3  underline cursor-pointer">Help Centre</li>
                    <li className="mb-3  underline cursor-pointer">Account</li>
                    <li className="mb-3  underline cursor-pointer">Media Centre</li>
                </ul>
            </div>
            <div className="text-md text-white m-5 p-5">
                <ul>
                    <li className="mb-3  underline cursor-pointer">Investor Relations</li>
                    <li className="mb-3  underline cursor-pointer">Jobs</li>
                    <li className="mb-3  underline cursor-pointer">Ways to Watch</li>
                    <li className="mb-3  underline cursor-pointer">Terms of Use</li>
                </ul>
            </div>
            <div className="text-md text-white m-5 p-5">
                <ul>
                    <li className="mb-3  underline cursor-pointer">Privacy</li>
                    <li className="mb-3  underline cursor-pointer">Cookie Preferences</li>
                    <li className="mb-3  underline cursor-pointer">Corporate Information</li>
                    <li className="mb-3  underline cursor-pointer">Contact Us</li>
                </ul>
            </div>
            <div className="text-md text-white m-5 p-5">
                <ul>
                    <li className="mb-3  underline cursor-pointer">Speed Test</li>
                    <li className="mb-3  underline cursor-pointer">Legal Notices</li>
                    <li className="mb-3  underline cursor-pointer">Only on Netflix</li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;