export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}.json?limit=100`);
    const json = await response.json();
  
    return json.data.children.map((post) => post.data);
  };


export const getSubredditAbout = async (subreddit) => {
    const response = await fetch(`${API_ROOT}${subreddit}/about.json`);
    const json = await response.json();
    return json.data
};
