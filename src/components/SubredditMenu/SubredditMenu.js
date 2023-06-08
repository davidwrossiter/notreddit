import React  from "react";
import './SubredditMenu.css';
import subredditIcon from '../../icons/Ellipse 1.svg';

export const SubredditMenu = () => {
    return(
        <div className="subreddit-menu-container">
            <button className="subreddit-button">
                <img src={subredditIcon} alt="subreddit-logo" />
                <p>r/popular</p>
            </button>
            <button className="subreddit-button">
                <img src={subredditIcon} alt="subreddit-logo" />
                <p>r/react</p>
            </button>
            <button className="subreddit-button">
                <img src={subredditIcon} alt="subreddit-logo" />
                <p>r/javascript</p>
            </button>
            <button className="subreddit-button">
                <img src={subredditIcon} alt="subreddit-logo" />
                <p>r/redux</p>
            </button>
            <button className="subreddit-button">
                <img src={subredditIcon} alt="subreddit-logo" />
                <p>r/react-redux</p>
            </button>
        </div>
    )
}