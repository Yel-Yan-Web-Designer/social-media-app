import React from 'react';
import {Topbar,Sidebar, Feed, Rightbar  } from '../../components/components';
import './style.css';

const Home = () => {
  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home;