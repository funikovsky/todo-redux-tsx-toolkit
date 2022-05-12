import { FC } from "react"
import { useAppSelector } from "../hook"

interface IPost {
    post: {
        id: number,
        title: string,
        body: string,
        userId: number,
    }
}


export const PostInfo: FC<IPost> = ({ post }) => {

    const openPostId = useAppSelector(state => state.post?.openPostId)

    if (openPostId === post.id) {

        return (

            <div style={{ backgroundColor: 'red' }}>
                user ID: {post.id},<br /> body: {post.body}
            </div>

        )
    } else return (<></>)















}