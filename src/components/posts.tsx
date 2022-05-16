import { FC } from "react"
import { Post } from "./post"
import { useAppSelector } from '../hook'
import { LoadingPosts } from "./loadingPosts"
import { ErrorPosts } from "./error"
import { GetPostsForm } from "./getPostForm"



export const Posts: FC = () => {

    const posts = useAppSelector(state => state.post.posts)

    return (

        <>
            <GetPostsForm />
            <LoadingPosts />

            <ErrorPosts>

                {posts.map(post => (
                    <Post key={post.id} post={post} />

                ))}


            </ErrorPosts>



        </>
    )

}