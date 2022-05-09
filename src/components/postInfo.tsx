import { FC } from "react"

interface IPost {
    post: {
        id:number,
        title: string,
        body: string,
        userId: number,
        isPrivat: boolean
    }
}


export const PostInfo: FC<IPost> = ({post}) => {

    return (
        <div style={{backgroundColor:'red'}}>
            user ID: {post.id},<br/> body: {post.body} 

        </div>

    )
    
}