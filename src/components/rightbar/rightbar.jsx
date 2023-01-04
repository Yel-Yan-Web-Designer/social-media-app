import React from 'react';
import './style.css';

import { Users } from '../../dummyData';
import { Online } from '../components';

const rightbar = ({profile}) => {

  const HomerightBar = () => {
    return (
      <>
        <div className="toprightbar">
          <img src="assets/gift.png" alt="" className="gift" />
          <p className="toprightbar-para">
            <span className='bold'>Pola Foster</span> and <span className='bold'>3 others friends </span>have a birthday today
          </p>
        </div>
        <img src='assets/ad.png' style={{borderRadius : "7px"}}/>
        <h4 className="online-text">Online Friends</h4>
        <div className="online-friendlist">
          {
            Users.map( x => (
              <Online key ={x.id} img={x.profilePicture} username={x.username}/>
            ))
          }
        </div>
      </>
    )
  }

  const ProfilerightBar = () => {
    return (
        <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <h5 className='rightbarinfoItems'>City : <span>New York</span></h5>
            <h5 className='rightbarinfoItems'>State : <span>United State</span></h5>
            <h5 className='rightbarinfoItems'>Status : <span>Single</span></h5>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/p-1.jpeg" alt="friend photo" />
              <span>Monica Venus</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/p-2.jpeg" alt="friend photo" />
              <span>John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/p-3.jpeg" alt="friend photo" />
              <span>SZA</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/p-4.jpeg" alt="friend photo" />
              <span>Lana Camilla</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/p-5.jpeg" alt="friend photo" />
              <span>Aurora</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/p-6.jpeg" alt="friend photo" />
              <span>Selena</span>
            </div>
          </div>
        </>
    )
  }


  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
          {profile ? <ProfilerightBar/> : <HomerightBar/>}
      </div>
    </div>
  )
}

export default rightbar;
