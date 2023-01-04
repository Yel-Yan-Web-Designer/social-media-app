import {useState} from 'react';
import './style.css';
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../dummyData';

const Post = ({desc, photo, date, like,comment, userId}) => {
  const [liked, isLiked] = useState(like);
  const [clicked, setClicked] = useState(false);

  function handleLike () {
    isLiked(clicked ? liked-1 : liked+1);
    setClicked(!clicked);
  }
  return (
    <div className='post'>
      <div className="post-wrapper">
            <div className="post-top">
                <div className="post-topleft">
                  <img className='post-img' src={Users.filter(u => u.id === userId)[0].profilePicture}/>
                  <h4 className="post-username">{Users.filter(u => u.id=== userId)[0].username}</h4>
                  <span>{date}</span>
                </div>
                <div className="post-topright">
                  <MoreVert className="post-icon"/>
                </div>
            </div>
            <div className="post-center">
              <span className="post-text">{ desc}</span>
              <img src={photo} alt="username's image" className="post-main-img" />
            </div>
            <div className="post-bottom">
              <div className="post-bottom-left">
                <span>
                  <img src="/assets/like.png" alt='reaction' className='reaction'onClick={handleLike}/>
                </span>
                <span>
                  <img src="/assets/heart.png" alt='reaction' className='reaction'onClick={handleLike}/>
                </span>
                <span>{liked} people like it</span>
              </div>
              <div className="post-bottom-right">
                <span className="cmts">{comment} comments</span>
              </div>
            </div>
      </div>
    </div>  
  )
}

export default Post;