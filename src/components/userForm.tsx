import { FC } from "react"
import { useAppDispatch } from "../hook"
import { addFirstName, addLastName } from "../store/userSlice"

export const UserForm: FC = () => {

    const dispatch = useAppDispatch()

    return (

        <>
            <div style={{ margin: 30 }}>
                <input onChange={(e) => dispatch(addFirstName(e.target.value))} type="text" /> FirstName
            </div>
            <div>
                <input onChange={(e) => dispatch(addLastName(e.target.value))} type="text" /> LastName
            </div>

        </>
    )

}
