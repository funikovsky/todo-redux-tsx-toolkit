import React, { FC } from "react"

import { useAppSelector } from "../hook"


export const UserFirstName: FC = () => {

    const userName = useAppSelector((state) => state.user.firstName)
    return (
        <>
            <div style={{ margin: 30 }}>
                <span>{userName}</span>
            </div>
        </>
    )
}
