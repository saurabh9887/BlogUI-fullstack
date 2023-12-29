import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";
import { Facebook, Instagram, Twitter, Linkedin, Search } from "lucide-react";

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <Facebook className="topIcon" color="#898991" />
        <Instagram className="topIcon" color="#898991" />
        <Twitter className="topIcon" color="#898991" />
        <Linkedin className="topIcon" color="#898991" />
      </div>
      <div className="top-middle">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTENT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img className="PP" src="../../../Img/luffy.jpg" alt="" />
        ) : (
          <>
            <Link style={{cursor:"pointer"}} className="link" to="/login">Login</Link>
            <Link style={{cursor:"pointer"}} className="link" to="/register">Register</Link>
          </>
        )}
        <Search className="TopSearch" color="#898991" />
      </div>
    </div>
  );
};

export default TopBar;
