import React from 'react';
import './style.css';
import {Users} from '../../dummyData';

import {Divider} from '@material-ui/core';
import {RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline,WorkOutline, Event, School } from '@material-ui/icons';
import {CloseFriend}  from '../components';

const sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <RssFeed className="sidebar-icon"/>
            <span className='sidebar-item-text'>Feed</span>
          </li>
          <li className="sidebar-item">
            <Chat className="sidebar-icon"/>
            <span className='sidebar-item-text'>Chats</span>
          </li>
          <li className="sidebar-item">
            <PlayCircleFilledOutlined className="sidebar-icon"/>
            <span className='sidebar-item-text'>Videos</span>
          </li>
          <li className="sidebar-item">
            <Group className="sidebar-icon"/>
            <span className='sidebar-item-text'>Groups</span>
          </li>
          <li className="sidebar-item">
            <Bookmark className="sidebar-icon"/>
            <span className='sidebar-item-text'>Bookmarks</span>
          </li>
          <li className="sidebar-item">
            <HelpOutline className="sidebar-icon"/>
            <span className='sidebar-item-text'>Questions</span>
          </li>
          <li className="sidebar-item">
            <WorkOutline className="sidebar-icon"/>
            <span className='sidebar-item-text'>Jobs</span>
          </li>
          <li className="sidebar-item">
            <Event className="sidebar-icon"/>
            <span className='sidebar-item-text'>Events</span>
          </li>
          <li className="sidebar-item">
            <School className="sidebar-icon"/>
            <span className='sidebar-item-text'>Courses</span>
          </li>
        </ul>
        <button className='seeMore-btn'>See More</button>
        <hr className='divider'/>
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <CloseFriend key ={u.id} img={u.profilePicture} username={u.username}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default sidebar;