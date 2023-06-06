import React from "react";
import './Post.css';
import arrowDown from '../../icons/ArrowFatDown.svg';
import arrowUp from '../../icons/ArrowFatDown-2.svg';
import subredditIcon from '../../icons/Ellipse 1.svg';
import shareIcon from '../../icons/ShareFat.svg';
import commentsIcon from '../../icons/Chat.svg';

const Post = () => {
    return (
        <div className="post">
            <div className="post-upvotes-container">
                <div className="post-upvotes">
                    <img src={arrowUp} alt="upvote" className="upvote-arrow"/>
                    <p>12.4k</p>
                    <img src={arrowDown} alt="downvote" className="downvote-arrow" />
                </div>
            </div>
            <div className="post-content">
                <div className="post-content-title-info">
                    <img src={subredditIcon} />
                    <p className="post-content-subreddit">r/popular</p>
                    <div className="post-content-line"></div>
                    <p className="post-content-user">u/justdavibeats</p>

                </div>
                <div className="post-content-body">
                    <p>A climber rescued from death's door on Mount Everest is being slammed online for thanking his sponsors instead of the sherpa who saved his life</p>
                </div>
                <div className="post-content-functionality">
                    <img src={commentsIcon} alt="comments" id="comments-image"/>
                    <p>12 Comments</p>
                    <img src={shareIcon} alt="share" id="share-image"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post