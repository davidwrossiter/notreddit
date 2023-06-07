import React from "react";
import './Header.css'
import redditLogo from '../../icons/Group.svg';
import notificationIcon from '../../icons/Bell.svg';
import tagIcon from '../../icons/TagSimple.svg';
import jsIcon from '../../icons/FileJs.svg';
import gitHubIcon from '../../icons/GithubLogo.svg';
import { useState } from "react";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
      setSearchTerm(event.target.value);

    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform search or any other action with the search term
      console.log('Search term:', searchTerm);
      // Clear the search input
    //   setSearchTerm('');
    };
  
    return (
        <div className="header-container">
            <div className="header-parent-container">
                <div className="header-logo">
                    <img src={redditLogo} alt="reddit-logo"/>
                    <p>notReddit</p>
                </div>
                

                {/* <input className="header-search-bar" value="Search"></input> */}
                <form onSubmit={handleSubmit} className="search-bar-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="header-search-bar"
                    />
                    <button type="submit">Search</button>
                </form>
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
            <div className="header-line"></div>
        </div>
    )
}

export default Header