import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { ErrorInfo } from "react";

interface Post {
    id:number,
    title: string,
    body: string,
    userId: number,
    isPrivat: boolean
    
}

interface InitialState {
    posts: Post[],
    loading: boolean,
    error: ErrorInfo | null 
}

const initialState: InitialState = {
    posts: [],
    loading: false,
    error: null
    
} 

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        openPostInfo: (state, action: PayloadAction<number>) => {

            state.posts.map(post => {
                if(post.id === action.payload) {
                    post.isPrivat = !post.isPrivat
                }
                return post
            })

        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(isAnyOf(getPosts.pending), (state, action) => {
                state.loading = true
                state.error = null
            })
            .addMatcher(isAnyOf(getPosts.fulfilled), (state, action) => {

                console.log('fulfilled')
                state.loading = false
                state.error = null
                state.posts = action.payload.posts.map(post => {
                    return {...post, isPrivat: false}
                })
               
            })
            .addMatcher(isAnyOf(getPosts.rejected), (state, action) => {
                console.log(action.payload)
                state.loading = false
                if(action.payload) state.error = action.payload
            })
    }

})

export const getPosts = createAsyncThunk<InitialState, void, {rejectValue: ErrorInfo }>(
  'get/posts',
    async(_, {rejectWithValue}) => {

        try {

            const request = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

            if(!request.ok) {
                throw new Error('Server Error')
            }
            const data:Post[] = await request.json()
        
            const newState = {
                posts: [...data],
                loading: false,
                error: null
            }
                
            return newState
            
        } catch (error:any) {
            return rejectWithValue(error.message)
            
        }

        
              
    }
)


export const PostReducer = PostSlice.reducer
export const {openPostInfo} = PostSlice.actions
