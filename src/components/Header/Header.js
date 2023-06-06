import React from "react";
import './Header.css'
import redditLogo from '../../icons/Group.svg';
import searchIcon from '../../icons/MagnifyingGlass.svg';
import notificationIcon from '../../icons/Bell.svg';
import tagIcon from '../../icons/TagSimple.svg';
import jsIcon from '../../icons/FileJs.svg';
import gitHubIcon from '../../icons/GithubLogo.svg';

const Header = () => {
    return (
        <div className="header-parent-container">
            <div className="header-logo">
                <img src={redditLogo} alt="reddit-logo"/>
                <p>notReddit</p>
            </div>
            <div className="header-search-bar">
                <img src={searchIcon} alt="search-icon" />
                <p id="search-reddit">Search Reddit</p>
            </div>
            <div className="header-nav-section">
                <div className="header-nav-notification-container">
                    <div id='header-nav-notification-number'>
                        <p>12</p>
                    </div>
                    <img src={notificationIcon} alt="notifications" />
                </div>
                <img src={tagIcon} alt="saved-posts" />
                <img src={jsIcon} alt="source-code" />
                <div id="header-nav-line"></div>
                <img src={gitHubIcon} alt="david-github" />
            </div>
        </div>
    )
}

export default Header