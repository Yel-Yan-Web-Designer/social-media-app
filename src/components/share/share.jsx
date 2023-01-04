import React from 'react';
import './style.css';

import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons';

const share = () => {
  return (
    <div className='share'>
      <div className="share-wrapper">
        <div className="share-top">
          <img src="/assets/person/p-1.jpeg" alt="" className="share-img" />
          <input type="text" className='share-input' placeholder="What's on your mind?"/>
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
               <PermMedia className='share-icon' htmlColor ="tomato"/>
               <span className='share-option-text'>Photo or Video</span>
            </div>
            <div className="share-option">
               <Label className='share-icon' htmlColor ="blue"/>
               <span className='share-option-text'>Tag</span>
            </div>
            <div className="share-option">
               <Room className='share-icon' htmlColor ="green"/>
               <span className='share-option-text'>Location</span>
            </div>
            <div className="share-option">
               <EmojiEmotions className='share-icon' htmlColor ="goldenrod"/>
               <span className='share-option-text'>Feelings</span>
            </div>
          </div>
          <button className='share-btn'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default share