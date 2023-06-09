import React  from "react";
import './SubredditMenu.css';
import subredditIcon from '../../icons/Ellipse 1.svg';
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSubredditAbout } from "../../api/api";
import { setCurrentSub } from "../../features/CurrentSubSlice";
import { selectCurrentSub } from "../../features/CurrentSubSlice";
import { useSelector } from "react-redux";

export const SubredditMenu = () => {

    

    const [loading, setLoading] = useState(true)
    // const [image, setImage] = useState('')
    const dispatch = useDispatch()
    const thisData = useSelector(selectCurrentSub);

    // const formatData = (inputData) => {
    //     const returnedData = []
    //     returnedData.push(inputData.community_icon)
    //     return returnedData
    // }

    const shortenUrl = (url) => {
        let newUrl = [];
        for (let i = 0; i<url.length; i++) {
    
            if (url[i] === '?') {
                break
            } else {
                newUrl.push(url[i])
            }
        }
        let returnString = ''
        for (let i = 0; i<newUrl.length; i++) {
            returnString += newUrl[i]
        }
        return returnString
    }
    


    useEffect(() => {
        const getData = async (getSubredditAbout, subreddit) => {
            try {

                setLoading(true)
                const data = await getSubredditAbout(subreddit);
                dispatch(setCurrentSub(data))
                console.log(data)
                setLoading(false)

            } catch (error) {

                setLoading(false)
            }
        }

        (getData(getSubredditAbout, '/r/ksi'))

    }, [])

    if(!loading) {
        return(
            <div className="subreddit-menu-container">
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" />
                    </div>
                    
                    <p>r/PewdiepieSubmissions</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" />
                    </div>
                    <p>r/react</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" />
                    </div>
                    <p>r/javascript</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" />
                    </div>
                    <p>r/redux</p>
                </button>
                <button className="subreddit-button">
                    <div className="subreddit-image-container">
                        <img src={shortenUrl(thisData.community_icon)} alt="subreddit-logo" />
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