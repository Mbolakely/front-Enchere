import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col overflow-auto">
      <Header></Header>
      {/* First part */}
        <Outlet></Outlet>
          {/* footer */}
          <Footer></Footer>
    </div>
  );
};

export default Home;
