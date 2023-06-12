import React from "react";
import './SubredditAbout.css';
import subredditIcon from '../../icons/Ellipse 1.svg';
import lockIcon from '../../icons/LockSimple.svg';
import { useSelector } from "react-redux";
import { shortenUrl } from "../../functions/functions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectCurrentSub } from "../../features/CurrentSubSlice";
import { useState } from "react";

const SubredditAbout = ({loadingState}) => {

    const [currentImage, setCurrentImage] = useState('')
    const [loading, setLoading] = useState(true);
    const [profileImage, setProfileImage] = useState('');
    const [subredditTitle, setSubredditTitle] = useState('');
    const [subredditInfo, setSubredditInfo] = useState('')

    const dispatch = useDispatch();
    const thisData = useSelector(selectCurrentSub);



    useEffect(() => {
        const getData = async () => {
            try {
                // state.currentSub = {
                //     subName: action.payload.subName,
                //     subInfo: action.payload.subInfo
                // }
    
                setLoading(true)
                // const data = await thisData;
                console.log(thisData)
                setCurrentImage(thisData.subInfo.banner_background_image)
                setProfileImage(thisData.subInfo.community_icon)
                // setSubredditInfo
                // subredditTitle
                setLoading(false)
    
            } catch (error) {
    
                setLoading(false)
            }
        }
    
        getData()
    })

    

    if(!loadingState) {




        return (
            <div className="subreddit-about-container">
    
                <div className="subreddit-about-banner">
                    {/* <img src={shortenUrl(currentImage)} alt="subreddit-logo" /> */}
                    <img src={shortenUrl(currentImage)} alt="subreddit-banner" id="subreddit-banner"/>
                </div>
    
                <div className="subreddit-about-title">
                    <img src={shortenUrl(profileImage)} alt="subreddit-icon"/>
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

}

export default SubredditAbout