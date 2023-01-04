import React from 'react';
import './style.css';

const online = ({img, username}) => {
  const styles ={
    display : 'flex',
    alignItems : "center",
    columnGap : "0.56rem",
  }
  return (
    <div style={styles}>
      <div className="img-container" style={{position:'relative'}}>
        <img src={img} alt ="user's profile photo" className="onlineImg"/>
        <span className="circle"></span>
      </div>
      <p className="username">{username}</p>
    </div>
  )
}

export default online