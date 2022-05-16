import { FC, ReactNode } from "react";
import { useAppSelector } from "../hook";



export const ErrorPosts:FC<{children: ReactNode}> = ({children}) => {

    const error = useAppSelector(state => state.post.error)

    if(error) {
        return (
            <>
                <p>{error}</p>
            </>
        )
    } else return (<> {children} </>)

}