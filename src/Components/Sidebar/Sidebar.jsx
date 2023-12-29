import React from "react";
import "./Sidebar.scss";
import { Facebook, Instagram, Twitter, Linkedin, Search } from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="../../../Img/mikey.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum
          rerum cum, reiciendis assumenda aut incidunt necessitatibus placeat
          distinctio cupiditate doloribus. Sed, in veniam! Reprehenderit!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ON SOCIALS</span>
        <div className="sidebarSocial">
          <Facebook className="sidebarIcon" color="#616366" />
          <Instagram className="sidebarIcon" color="#616366" />
          <Twitter className="sidebarIcon" color="#616366" />
          <Linkedin className="sidebarIcon" color="#616366" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
