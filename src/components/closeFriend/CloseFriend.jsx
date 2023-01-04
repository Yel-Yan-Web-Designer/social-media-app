import React from 'react';
import './style.css'

const CloseFriend = ({img, username}) => {
  return (
    <li className='sidebarfriend'>
      <img src={img} alt="user's profile Picture" className="sidebarfriendlistImg"/>
      <span className='username'>{username}</span>
    </li>
  )
}

export default CloseFriend;
