import { FC } from "react"
import { useAppSelector } from "../hook"




export const LoadingPosts: FC = () => {

    const loading = useAppSelector(state => state.post.loading)

    if (loading) {
        return (
            <>
                <p>...ЗАГРУЗКА</p>
            </>
        )
    } else return (
        <></>
    )


}