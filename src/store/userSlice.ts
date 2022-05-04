import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type IUsers = {
    firstName: string,
    lastName: string

} 

const initialState: IUsers = {
    firstName: '',
    lastName: ''

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload
        },
        addLastName: (state, action: PayloadAction<string>) => {
            state.lastName = action.payload
        }
    }
})

export const {addFirstName, addLastName} = userSlice.actions