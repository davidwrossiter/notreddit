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
import { useEffectOnce } from "../../customHooks/useEffectOnce";

const Homepage = () => {
    
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    
    const posts = useSelector(selectPosts) 
    useEffectOnce(() => {
        
        console.log('hello')
        const getData = async (getSubredditPosts, subreddit) => {
            try {

                setLoading(true);
                const filteredData = [];
                const data = await getSubredditPosts(subreddit);
                console.log(data)
                data.map((item) => {
                    return filteredData.push(
                        {
                            postID: item.name,
                            postTitle: item.title,
                            postSubreddit: item.subreddit_name_prefixed,
                            postAuthor: item.author,
                            postLink: item.permalink,
                            postNumberComments: item.num_comments,
                            postNumberUpvotes: item.ups
                        }
                    )
                })
                
                dispatch(getPosts(filteredData))
                
                setLoading(false)
                
                
            } catch (error) {
                setLoading(false)
            }
            

            
        }
        //     postID: "24ZD3L1",
        //     postTitle: "Parents 'spit on headteacher and threaten her family' over healthy school dinners plan",
        //     postSubreddit: "r/unitedkingdom",
        //     postAuthor: "u/iamnotinterested2",
        //     postLink: "https://www.reddit.com/r/unitedkingdom/comments/142tezz/parents_spit_on_headteacher_and_threaten_her/",
        //     numberComments: "348",
        //     numberUpvotes: "647",
        
        
        getData(getSubredditPosts, '/r/popular')


    }, [loading])

    // const returnAllNumbers = () => {
    //     for(let i=5; i <= 100; i++) {
    //         return <Post postID={posts[i].postID} loading={loading} />
    //     }
    // }
    
    if (!loading) {
        return (
            <div className="home-page-container">
                
                
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