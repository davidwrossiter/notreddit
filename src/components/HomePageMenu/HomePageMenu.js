import React from "react";
import './HomePageMenu.css'
import redditLogo from '../../icons/reddit-logo.svg'
import searchIcon from '../../icons/search.svg'

const HomePageMenu = () => {
    return (
            <div className='left-hand-menu'>
                <div className='left-hand-menu-logo'>
                    <img src={redditLogo} />
                    <p>notReddit</p>
                </div>            
                <div className='left-hand-menu-search-bar'>
                    <img src={searchIcon} />
                    <p>Search</p>
                </div>
                <div className='left-hand-menu-notifications'></div>
                <div className='left-hand-menu-my-subreddits'></div>        
            </div>

    )
}

export default HomePageMenu