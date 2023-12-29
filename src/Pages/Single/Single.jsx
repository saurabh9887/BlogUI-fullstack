import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Single.scss"
import SinglePost from '../../Components/SinglePost/SinglePost'

function Single() {
  return (
    <div className='single'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}

export default Single
