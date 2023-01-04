import React from 'react';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import './style.css';

const topbar = () => {
  return (
    <nav className='nav'>
      <div className="nav-left">
        <h1 className="logo">Social Media</h1>
      </div>
      <div className="nav-center">
        <div className="searchbar">
          <Search className='search'/>
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-item"><a href="#" className="nav-link">Homepage</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Timeline</a></li>
          </ul>
          <div className="nav-icons">
            <div className="nav-icon-item">
              <Person/>
              <span className="nav-icon-badge">1</span>
            </div>
            <div className="nav-icon-item">
              <Chat/>
              <span className="nav-icon-badge">2</span>
            </div>
            <div className="nav-icon-item">
              <Notifications/>
              <span className="nav-icon-badge">1</span>
            </div>
          </div>
          <img src="assets/person/p-2.jpeg" alt="navigation image" className='nav-img'/>
      </div>
    </nav>
  )
}

export default topbar

          