import React from "react";
import "./Home.scss"
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <Posts/>
        <Sidebar/>
      </div>
    </div>
  );
}

export default Home;
