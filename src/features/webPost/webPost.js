import { addPost } from "./webPostSlice";
import { selectCardInfo } from "./webPostSlice";
import { useSelector,useDispatch } from "react-redux";

export function WebPost() {
    const redditInfo = useSelector(selectCardInfo)
    // const redditInfo = useSelector(selectCardInfo)
    const dispatch = useDispatch()
    // let jsObject = fetch('https://www.reddit.com/r/popular.json')
    // dispatch(addPost(jsObject))
    return (
        <div>
            <h1>hi</h1>
        </div>
    )
}