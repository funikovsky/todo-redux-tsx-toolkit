import { FC } from "react"
import { Post } from "./post"
import { useAppDispatch } from "../hook"
import { getPosts } from "../store/postSlice"
import {useAppSelector} from '../hook'



export const  Posts:FC = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.post.posts)
    const loading = useAppSelector(state => state.post.loading)
    const error = useAppSelector(state => state.post.error)
    

return (

    <>
        <button onClick={() => dispatch(getPosts())}> GET POSTS</button>
        {loading && <p>...ЗАГРУЗКА</p>}
        {error && <p>{error.toString()}</p>}
        {}
        {posts.map(post => (
            <Post key={post.id} post={post}/>
          
        ))}
    </>
)

}