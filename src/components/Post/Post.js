import React from "react";
import './Post.css';
import arrowDown from '../../icons/ArrowFatDown.svg';
import arrowUp from '../../icons/ArrowFatDown-2.svg';
// import subredditIcon from '../../icons/Ellipse 1.svg';
import shareIcon from '../../icons/ShareFat.svg';
import commentsIcon from '../../icons/Chat.svg';
import { useSelector } from "react-redux";
import { selectPosts } from "../../features/PostSlice";
import { useState } from "react";
import { useEffect } from "react";


const Post = ({postID, loading}) => {



    const [currentPost, setCurrentPost] = useState('')
    const [smallNumber, setSmallNumber] = useState('')
    const posts = useSelector(selectPosts)


    const getReturnedPost = (posts, setCurrentPost) => {
        posts.map((post) => {
            if (post.postID === postID) {
                return setCurrentPost(post)
            } else {
                return 'null'
            }
        })
    
    }
    
    useEffect(() => {
        // console.log(posts)
        getReturnedPost(posts, setCurrentPost)
        // console.log(currentPost.postNumberUpvotes)
        
        
    }, [])

    return (
        <div className="post">
            <div className="post-upvotes-container">
                <div className="post-upvotes">
                    <img src={arrowUp} alt="upvote" className="upvote-arrow"/>
                    <p>{currentPost.postNumberUpvotes}</p>
                    <img src={arrowDown} alt="downvote" className="downvote-arrow" />
                </div>
            </div>
            <div className="post-content">
                <div className="post-content-title-info">
                    {/* <img src={subredditIcon} alt="subreddit-icon" /> */}
                    <p className="post-content-subreddit">{currentPost.postSubreddit}</p>
                    <div className="post-content-line"></div>
                    <p className="post-content-user">u/{currentPost.postAuthor}</p>

                </div>
                <div className="post-content-body">
                    <p>{currentPost.postTitle}</p>
                    <img src={currentPost.postPhoto}/>
                </div>
                <div className="post-content-functionality">
                    <img src={commentsIcon} alt="comments" id="comments-image"/>
                    <p>{currentPost.postNumberComments}</p>
                    <img src={shareIcon} alt="share" id="share-image"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}
export default Post