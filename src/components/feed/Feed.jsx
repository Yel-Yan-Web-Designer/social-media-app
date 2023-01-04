import React from 'react';
import './style.css';
import { Share, Post } from '../components';  
import { Posts } from '../../dummyData';    

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share/>
        {Posts.map(x => (
          <Post 
            key={x.id}
            desc = {x.desc}
            photo = {x.photo}
            date = {x.date}
            userId = {x.userId}
            like = {x.like}
            comment = {x.comment}
          />
        ))}
      </div>
    </div>
  )
}

export default Feed;