import React from 'react'
import { Link } from 'react-router-dom'
import "./Post.scss"
import Sidebar from '../Sidebar/Sidebar'

function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="../../../Img/nature.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle"><Link className='link' to="/singlePost">Lorem ipsum dolor sit amet.</Link></span>
            <hr />
            <span className="postDate">1hr ago</span>
            <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo quisquam quas atque, id doloremque! Possimus, voluptates. Dolorum temporibus, necessitatibus cumque reiciendis ab velit excepturi tenetur incidunt quaerat fugiat cum nihil praesentium inventore, harum, quisquam beatae. Atque, iusto. Itaque harum exercitationem optio qui, consectetur laudantium deleniti quos ipsa aspernatur odit.</p>
        </div>
    </div>
  )
}

export default Post
