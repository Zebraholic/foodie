import { Link } from "react-router-dom";



const NavHeader = () => {
    return (
        <>
        <header>
        <nav className="bg-white  dark:bg-gray-800">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <Link to={"/"} className="text-gray-800 font-bold hover:text-cyan-900 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-gray-500 mx-1.5 sm:mx-6">Home</Link>
                <Link to={"/about-us"} className="text-gray-800 font-bold hover:text-cyan-900 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-gray-500 mx-1.5 sm:mx-6">About Us</Link>
                <Link to={"/"} className="text-gray-800 font-bold hover:text-cyan-900 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-gray-500 mx-1.5 sm:mx-6">App</Link>
                <Link to={"/"} className="text-gray-800 font-bold hover:text-cyan-900 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-gray-500 mx-1.5 sm:mx-6">Contact</Link>
            </div>
        </nav>
        </header>
        </>
    );
};

export default NavHeader;

