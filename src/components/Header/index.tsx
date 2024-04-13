import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../utils/types";

const Header = () => {
  const [navigation, setNavigation] = useState("home");
  return (
    <div className="h-[23.5rem] bg-prim">
      <div className="flex justify-between px-2 items-center h-[4rem] flex-wrap">
        <div className="w-[8rem] h-[2.5rem] bg-white flex items-center justify-center">
          LOGO
        </div>
        <div className="bg-slate-400 rounded-lg h-[2.5rem] flex items-center justify-end pr-2 w-[24rem] gap-2">
          <span>search...</span>
          <div className="w-[2rem] h-[2rem] bg-white flex items-center justify-center cursor-pointer"></div>
        </div>
        <div className="flex gap-6 text-white">
          <Link to="/home">
            <span
              className={`cursor-pointer hover:text-nav ${
                navigation === Navigation.home && "text-nav"
              }`}
              onClick={() => setNavigation("home")}
            >
              Home
            </span>
          </Link>
          <Link to="/category">
            <span
              className={`cursor-pointer hover:text-nav ${
                navigation === Navigation.category && "text-nav"
              }`}
              onClick={() => setNavigation("category")}
            >
              Categories
            </span>
          </Link>
          <Link to="/article">
            <span
              className={`cursor-pointer hover:text-nav ${
                navigation === Navigation.article && "text-nav"
              }`}
              onClick={() => {
                setNavigation("article");
              }}
            >
              Articles
            </span>
          </Link>
          <Link to="/location">
            <span
              className={`cursor-pointer hover:text-nav ${
                navigation === Navigation.location && "text-nav"
              }`}
              onClick={() => {
                setNavigation("location");
              }}
            >
              Locations
            </span>
          </Link>
          <Link to="/about">
            <span
              className={`cursor-pointer hover:text-nav ${
                navigation === Navigation.about && "text-nav"
              }`}
              onClick={() => {
                setNavigation("about");
              }}
            >
              About
            </span>
          </Link>
          <Link to="/session">
            <span
              className={`cursor-pointer hover:text-nav ${
                navigation === Navigation.calendar && "text-nav"
              }`}
              onClick={() => {
                setNavigation("calendar");
              }}
            >
              Sessions
            </span>
          </Link>
        </div>
        <div className="flex gap-2">
        <Link to='/login'>
        <div className="border text-white rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer hover:bg-nav hover:text-black">
            Log in
          </div>
        </Link>
          <Link to="/sign">
            <div className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer hover:bg-inherit hover:text-white">
              Sign up
            </div>
          </Link>
          <div className="h-[2.5rem] w-[2.5rem] bg-black rounded-full cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
