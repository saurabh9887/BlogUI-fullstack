import React from "react";
import "./Settings.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { CircleUserRound } from "lucide-react";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label className="settingsFormTitle">Profile Picture</label>
          <div className="settingsPP">
            <img src="../../../Img/luffy.jpg" alt="" />
            <label htmlFor="fileInput">
              <CircleUserRound className="settingsPPIcon"/>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Saurabh" name="name"/>
          <label>Email</label>
          <input type="email" placeholder="Saurabh@gmail.com" name="gmail"/>
          <label>Password</label>
          <input type="password" placeholder="****" name="password" className="settingsPassword"/>
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
