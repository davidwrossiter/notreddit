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

    function nFormatter(num, digits) {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" }
        ];
        const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        var item = lookup.slice().reverse().find(function(item) {
          return num >= item.value;
        });
        return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
      }

    const [currentPost, setCurrentPost] = useState('')
    // const [smallNumber, setSmallNumber] = useState('')
    const posts = useSelector(selectPosts)

    useEffect(() => {

        const getReturnedPost = (posts, setCurrentPost) => {
            posts.map((post) => {
                if (post.postID === postID) {
                    return setCurrentPost(post)
                } else {
                    return 'null'
                }
            })
        
        }
        // https://packaged-media.redd.it/m5pq99rrwt4b1/pb/m2-res_384p.mp4?m=DASHPlaylist.mpd&v=1&e=1686292105&s=2164cb992bdc5499822395c1f845309ef74bc8d9#t=
        // https://packaged-media.redd.it/i7c7jdq3n44b1/pb/m2-res_720p.mp4?m=DASHPlaylist.mpd&v=1&e=1686303007&s=5c04905625ee62b06e1e1849ee8ffcdbf307daf7#t=0
        // m5pq99rrwt4b1
    
        // console.log(posts)
        getReturnedPost(posts, setCurrentPost)
        // console.log(currentPost.postNumberUpvotes)
        
        
    }, [posts, postID])

    return (
        <div className="post">
            <div className="post-upvotes-container">
                <div className="post-upvotes">
                    <img src={arrowUp} alt="upvote" className="upvote-arrow"/>
                    <p>{nFormatter(currentPost.postNumberUpvotes, 1)}</p>
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
                    
                        { currentPost.postHint === "image" ? <div className="post-content-body-image-container"><img src={currentPost.postPhoto} alt="post-content"/></div> : '' }
                    
                </div>
                <div className="post-content-functionality">
                    <img src={commentsIcon} alt="comments" id="comments-image"/>
                    <p>{nFormatter(currentPost.postNumberComments, 1)}</p>
                    <img src={shareIcon} alt="share" id="share-image"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}
export default Post