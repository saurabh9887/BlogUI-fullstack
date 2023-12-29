import React from "react";
import "./SinglePost.scss";
import { FileEdit, Trash2 } from "lucide-react";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="../../../Img/nature.jpg" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <FileEdit className="singlePostIcon" />
            <Trash2 className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Saurabh</b></span>
            <span className="singlePostDate">1hr ago</span>
        </div>
        <p className="singlePostDecs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nemo? A, repellendus! Quas, ducimus quasi! Magnam omnis est quaerat quo, beatae porro mollitia error optio numquam nulla assumenda quia. Earum omnis ducimus magni praesentium cum ut quasi eum laudantium, vel reiciendis provident eligendi harum. Esse quam excepturi voluptatum assumenda quia iste quos qui nihil sint expedita quidem fugiat, animi quod, aperiam, quisquam voluptatibus illo ipsa atque sequi neque? Ut unde suscipit iste maxime doloremque ex? Laborum tempora odio exercitationem vitae odit deserunt molestias nemo cum dignissimos. Qui ipsum dolore aperiam sapiente porro! Accusamus inventore ad nisi dignissimos voluptas qui quia.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nemo? A, repellendus! Quas, ducimus quasi! Magnam omnis est quaerat quo, beatae porro mollitia error optio numquam nulla assumenda quia. Earum omnis ducimus magni praesentium cum ut quasi eum laudantium, vel reiciendis provident eligendi harum. Esse quam excepturi voluptatum assumenda quia iste quos qui nihil sint expedita quidem fugiat, animi quod, aperiam, quisquam voluptatibus illo ipsa atque sequi neque? Ut unde suscipit iste maxime doloremque ex? Laborum tempora odio exercitationem vitae odit deserunt molestias nemo cum dignissimos. Qui ipsum dolore aperiam sapiente porro! Accusamus inventore ad nisi dignissimos voluptas qui quia.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
