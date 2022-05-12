
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { openPostInfo } from '../store/postSlice'
import { PostInfo } from './postInfo'

interface IPost {
    post: {
        id: number,
        title: string,
        body: string,
        userId: number,
    }
}

export const Post: FC<IPost> = ({ post }) => {

    const dispatch = useDispatch()
    return (
        <div onClick={() => dispatch(openPostInfo(post.id))} >
            <p>
                {post.title}
            </p>

            <PostInfo post={post} />

        </div>
    )
}