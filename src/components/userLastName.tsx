import { FC } from "react"
import { useAppSelector } from "../hook"


export const UserLastName: FC = () => {

    const lastName = useAppSelector((state) => state.user.lastName)
    return (
        <>
            <div>
                <span>{lastName}</span>
            </div>
        </>
    )
}