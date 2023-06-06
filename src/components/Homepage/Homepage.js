import React from "react";
import './Homepage.css'
import Post from "../Post/Post";
import SubredditAbout from "../SubredditAbout/SubredditAbout";

const Homepage = () => {
    return (
        <div className="home-page-container">
            
            
                <div className="home-page-posts-container">
                    <p id="popular-posts">Popular posts</p>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="home-page-subreddit-about-container">
                    <SubredditAbout />
                </div>
            
        </div>
    )
}

export default Homepage