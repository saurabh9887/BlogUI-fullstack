import React from "react";
import "./Write.scss";
import { PlusCircle } from "lucide-react";

function Write() {
  return (
    <div className="write">
    <img className="writeImg" src="../../../Img/nature.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <PlusCircle color="#59635b" style={{ cursor: "pointer" }} />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            className="writeInput"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Tell your story...."
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
