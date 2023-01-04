import React from 'react'
import {Topbar,Sidebar, Feed, Rightbar  } from '../../components/components';
import './style.css';

const Profile = () => {
  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="profileRight">
          <div className="profileRight-top">
            <div className="profileCover">
              <img src='assets/post/3.jpeg' className='coverPic'/>
              <img src='assets/person/p-7.jpeg' className="userPic"/>
            </div>
            <div className="profileInfo">
              <h4 className="user">Yel Yan</h4>
              <p className='bio'>Hello My friends!</p>
            </div>
          </div>
          <div className="profileRight-bottom">
            <Feed/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
