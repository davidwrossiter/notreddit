import React from "react";
import './SubredditAbout.css';
import subredditBanner from '../../images/eric-lee-ss8Dka_Tvwg-unsplash.jpg';
import subredditIcon from '../../icons/Ellipse 1.svg';
import lockIcon from '../../icons/LockSimple.svg';

const SubredditAbout = () => {
    return (
        <div className="subreddit-about-container">

            <div className="subreddit-about-banner">
                <img src={subredditBanner} alt="subreddit-banner" id="subreddit-banner"/>
            </div>

            <div className="subreddit-about-title">
                <img src={subredditIcon} alt="subreddit-icon"/>
                <p>r/popular</p>
            </div>

            <div className="subreddit-about-description">
                <p>The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.</p>
            </div>

            <div className="subreddit-about-line">
                <p></p>
            </div>

            <div className="subreddit-about-error-message">
                <p>Unfortunately this subreddit is not accepting anymore members at the current time</p>
            </div>

            <div className="subreddit-about-join-button">
                <button>
                    <img src={lockIcon} alt="lock-icon" />
                    <p>Join</p>
                </button>
            </div>

        </div>
    )
}

export default SubredditAbout