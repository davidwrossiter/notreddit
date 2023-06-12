import React  from "react";
import './SubredditMenu.css';
// import subredditIcon from '../../icons/Ellipse 1.svg';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSubredditAbout } from "../../api/api";
import { setCurrentSub } from "../../features/CurrentSubSlice";
import { selectCurrentSub } from "../../features/CurrentSubSlice";
import { useSelector } from "react-redux";
import { shortenUrl } from "../../functions/functions";

export const SubredditMenu = () => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const thisData = useSelector(selectCurrentSub);

    useEffect(() => {
        const getData = async (getSubredditAbout, subreddit) => {
            try {

                setLoading(true)
                const data = await getSubredditAbout(subreddit);
                console.log(data)
                dispatch(setCurrentSub({
                    subName: subreddit,
                    subInfo: data
                }))
                console.log(data)
                setLoading(false)

            } catch (error) {

                setLoading(false)
            }
        }

        (getData(getSubredditAbout, '/r/PewdiepieSubmissions'))
        

    }, [dispatch])

    if(!loading) {
        const url = thisData.subInfo.community_icon
        return(
            <div className="subreddit-menu-container">
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        <img src={shortenUrl(url)} alt="subreddit-logo" />
                    </div>
                    
                    <p>r/PewdiepieSubmissions</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        {/* <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" /> */}
                    </div>
                    <p>r/react</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        {/* <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" /> */}
                    </div>
                    <p>r/javascript</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        {/* <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" /> */}
                    </div>
                    <p>r/redux</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        {/* <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" /> */}
                    </div>
                    <p>r/react-redux</p>
                </button>
            </div>
        )
    } else {
        return (
            <p>Loading...</p>
        )
    }


}