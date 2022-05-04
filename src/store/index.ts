import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userSlice } from './userSlice';
import { todoSlice } from './todoSlice';


const rootReducer = combineReducers({
    user: userSlice.reducer,
    todo: todoSlice.reducer
})

const store = configureStore({
    reducer: rootReducer

})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch