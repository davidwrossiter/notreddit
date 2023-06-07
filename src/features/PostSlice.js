import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postInformation: {}
        // {
        //     postID: "13BE4P3",
        //     postTitle: "A climber rescued from death's door on Mount Everest is being slammed online for thanking his sponsors instead of the sherpa who saved his life",
        //     postSubreddit: "r/popular",
        //     postBody: "apple.com",
        //     postAuthor: "u/justdavibeats",
        //     postLink: "https://www.reddit.com/r/unitedkingdom/comments/142tezz/parents_spit_on_headteacher_and_threaten_her/",
        //     numberComments: "12",
        //     numberUpvotes: "12400",
        // },
        // {
        //     postID: "24ZD3L1",
        //     postTitle: "Parents 'spit on headteacher and threaten her family' over healthy school dinners plan",
        //     postSubreddit: "r/unitedkingdom",
        //     postBody: "https://www.mirror.co.uk/news/uk-news/parents-spit-headteacher-threaten-family-30169967?utm_source=flipboard&utm_content=other",
        //     postAuthor: "u/iamnotinterested2",
        //     postLink: "https://www.reddit.com/r/unitedkingdom/comments/142tezz/parents_spit_on_headteacher_and_threaten_her/",
        //     numberComments: "348",
        //     numberUpvotes: "647",
        // },

    
}

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPosts: (state, action) => {
            // the action payload is an array of objects returned from an API call
            state.postInformation = action.payload
        }
    }
})

export const { getPosts } = PostSlice.actions;
export const selectPosts = (state) => state.post.postInformation;
export default PostSlice.reducer;

