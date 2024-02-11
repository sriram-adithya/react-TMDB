import React from "react";
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className="sticky h-[80px] bg-darkBlue lg:flex text-white px-[40px] items-center z-20">
      <div className="flex items-center h-auto w-full justify-center">
        <a className="flex flex-row items-center" href="/">
          <img
            className="w-screen lg:w-[150px] md:w-[150px] sm:w-[150px] h-[80px] flex"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="The Movie database"
          />
        <ul className="lg:flex hidden text-xl mx-10 cursor-pointer">
          <li className="px-5">
            Movies
            </li>
          <li className="px-5 whitespace-nowrap">TV Shows</li>
          <li className="px-5">People</li>
          <li className="px-5">More</li>
        </ul>
        </a>
      </div>
      <div className="flex justify-center w-full text-base h-auto">
        <a className="flex justify-end" href="/">
          <ul className="lg:flex hidden text-xl mx-10 justify-end">
            <li className="px-5">
                <img className="w-[30px] h-[30px]" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" alt="/" />
            </li>
            {/* //Button border */}
            <li className="px-5">
                <button className="uppercase px-2 hover:bg-white duration-500 hover:text-darkBlue hover:rounded-md">en</button>
            </li>
            <li className="px-5">Login</li>
            <li className="px-5 whitespace-nowrap">Join TMDB</li>
            <li className="px-5"><FaSearch /></li>
          </ul>
        </a>
      </div>
    </header>
  );
};