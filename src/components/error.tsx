import { FC } from "react";
import { useAppSelector } from "../hook";



export const ErrorPosts:FC = () => {

    const error = useAppSelector(state => state.post.error)

    if(error) {
        return (
            <>
                <p>{error}</p>
            </>
        )
    } else return (<></>)

}