import { FC } from "react";
import { useAppDispatch } from "../hook";
import { getPosts } from "../store/postSlice";


export const GetPostsForm: FC = () => {

    const dispatch = useAppDispatch()

    return (
        <>
            <button style={{marginTop: 30}} onClick={() => dispatch(getPosts())}> GET POSTS</button>
        </>
    )
}