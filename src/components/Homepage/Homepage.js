import React from "react";
import './Homepage.css'
import Post from "../Post/Post";
import SubredditAbout from "../SubredditAbout/SubredditAbout";
import { getSubredditPosts } from "../../api/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../../features/PostSlice";
import { selectPosts } from "../../features/PostSlice";
import { useState } from "react";
import { useEffect } from "react";
import { SubredditMenu } from "../SubredditMenu/SubredditMenu";

const Homepage = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    const posts = useSelector(selectPosts) 
    

    const formatData = (inputData) => {
        const returnedData = []
        inputData.map((item) => {
            return returnedData.push(
                {
                    postID: item.name,
                    postTitle: item.title,
                    postSubreddit: item.subreddit_name_prefixed,
                    postAuthor: item.author,
                    postLink: item.permalink,
                    postNumberComments: item.num_comments,
                    postNumberUpvotes: item.ups,
                    postPhoto: item.url,
                }
            )
        })
        return returnedData
    }
    
    const changeLoadingState = (state, setState) => {
        setState(state)
    }

    useEffect(() => {
        
        console.log('hello')
        const getData = async (getSubredditPosts, subreddit) => {
            try {

                changeLoadingState(true, setLoading)
                let filteredData = [];
                const data = await getSubredditPosts(subreddit);
                console.log(data)
                filteredData = formatData(data)
                
                
                dispatch(getPosts(filteredData))
                
                changeLoadingState(false, setLoading)
                
                
            } catch (error) {
                changeLoadingState(false, setLoading)
            }
            

            
        }
        
        getData(getSubredditPosts, '/r/PewdiepieSubmissions')

    }, [])

    if (!loading) {
        console.log(loading)
        return (
            <div className="home-page-container">

                    <div className="home-page-subreddit-menu-container">
                        <p>Subreddits</p>
                        
                        <SubredditMenu />
                    </div>
                    
                
                    <div className="home-page-posts-container">
                        <p id="popular-posts">{loading ? 'loading' : 'Popular posts'}</p>
                        <Post postID={posts[0].postID} loading={loading} />
                        <Post postID={posts[1].postID} loading={loading} />
                        <Post postID={posts[2].postID} loading={loading} />
                        <Post postID={posts[3].postID} loading={loading} />
                        <Post postID={posts[4].postID} loading={loading} />
                        <Post postID={posts[5].postID} loading={loading} />
                        <Post postID={posts[6].postID} loading={loading} />
                        <Post postID={posts[7].postID} loading={loading} />
                        <Post postID={posts[8].postID} loading={loading} />
                        <Post postID={posts[9].postID} loading={loading} />
                        <Post postID={posts[10].postID} loading={loading} />
                        <Post postID={posts[11].postID} loading={loading} />
                        <Post postID={posts[12].postID} loading={loading} />
                        <Post postID={posts[13].postID} loading={loading} />
                        <Post postID={posts[14].postID} loading={loading} />
                        <Post postID={posts[15].postID} loading={loading} />
                        <Post postID={posts[16].postID} loading={loading} />
                        <Post postID={posts[17].postID} loading={loading} />
                        <Post postID={posts[18].postID} loading={loading} />
                        <Post postID={posts[19].postID} loading={loading} />
                        <Post postID={posts[20].postID} loading={loading} />
                        <Post postID={posts[21].postID} loading={loading} />
                        <Post postID={posts[22].postID} loading={loading} />
                        <Post postID={posts[23].postID} loading={loading} />
                    </div>
                    <div className="home-page-subreddit-about-container">
                        <SubredditAbout />
                    </div>

                
            </div>
        )
    } else {
        return (
            <div className='loading-state'>
                <h1 id="home-page-loading">Loading...</h1>
            </div>
            
        )
    }

}

export default Homepage