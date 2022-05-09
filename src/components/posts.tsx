import { FC } from "react"
import { Post } from "./post"
import { useAppDispatch } from "../hook"
import { getPosts } from "../store/postSlice"
import {useAppSelector} from '../hook'



export const  Posts:FC = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.post.posts)
    const louding = useAppSelector(state => state.post.louding)
    

return (

    <>
        <button onClick={() => dispatch(getPosts())}> GET POSTS</button>
        {louding && <p>...ЗАГРУЗКА</p>}
        {posts.map(post => (
            <Post key={post.id} post={post}/>
          
        ))}
    </>
)

}