import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../utils/types";
import { Requests } from "../../utils/requests.ts";
import { logout } from "../../tokenConfig/tokenConfig.ts";

const Header = () => {
  const [admin, setAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    getUser();
  }, []);
  const user = localStorage.getItem("user");
  const parsedUser = user && JSON.parse(user);

  console.log(parsedUser);

  const stringfiedUserId = parseFloat(parsedUser.id);

  async function getUser() {
    const response = await Requests.getUser(stringfiedUserId);
    if (response.status === 200) {
      console.log("GET", response.data);
    }
    setCurrentUser(response.data.id)
    setAdmin(response.data.isAdmin);
    console.log(response.data.isAdmin);
    console.log(response.data.id);
  }
  const [navigation, setNavigation] = useState("home");
  return (
    <div className="h-[23.5rem] bg-prim">
      <div className="flex justify-between px-2 items-center h-[4rem] flex-wrap">
        <div className="w-[10rem] h-[2.5rem] bg-logo1 bg-contain bg-center bg-no-repeat flex items-center justify-center rounded-lg">
          
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
          {admin && (
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
          )}
        </div>
      {
       !currentUser && (
        <div className="flex gap-2">
        <Link to="/login">
          <div className="border text-white rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer hover:bg-nav hover:text-black">
            Log in
          </div>
        </Link>
        <Link to="/sign">
          <div className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer hover:bg-inherit hover:text-white">
            Sign up
          </div>
        </Link>
      </div>
       )
      }
      {
        currentUser && (
          <div className="bg-nav rounded-lg h-[2.5rem] flex items-center justify-center w-[7rem] cursor-pointer hover:bg-inherit hover:text-white"
          onClick={logout}>
            log out
          </div>
        )
      }
      </div>
    </div>
  );
};

export default Header;
