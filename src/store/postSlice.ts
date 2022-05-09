import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    id:number,
    title: string,
    body: string,
    userId: number,
    isPrivat: boolean
    
}

interface InitialState {
    posts: Post[],
    louding: boolean
}

const initialState: InitialState = {
    posts: [],
    louding: false
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
                state.louding = true
            })
            .addMatcher(isAnyOf(getPosts.fulfilled), (state, action) => {

                console.log('fulfilled')
                state.louding = false
                state.posts = action.payload.posts.map(post => {
                    return {...post, isPrivat: false}
                })
               
            })
            .addMatcher(isAnyOf(getPosts.rejected), (state, action) => {
                console.log('rejected')
                state.louding = false
            })
    }

})

export const getPosts = createAsyncThunk<InitialState, void, {rejectValue: InitialState}>(
  'get/posts',
    async(_, {rejectWithValue}) => {

        const request = await fetch('https://jsonplaceholder.typicode.com/posts/')
        const data:Post[] = await request.json()
        
        const newState = {
            posts: [...data],
            louding: false
        }
        
        
        return newState
              
    }
)


export const PostReducer = PostSlice.reducer
export const {openPostInfo} = PostSlice.actions
