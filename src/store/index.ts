import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userSlice } from './userSlice';
import { todoSlice } from './todoSlice';
import { PostSlice } from './postSlice';


const rootReducer = combineReducers({
    user: userSlice.reducer,
    todo: todoSlice.reducer,
    post: PostSlice.reducer
})

const store = configureStore({
    reducer: rootReducer

})

export default store;

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
