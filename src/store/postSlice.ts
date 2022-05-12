import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    id: number,
    title: string,
    body: string,
    userId: number,

}

interface InitialState {
    posts: Post[],
    loading: boolean,
    error: string | null | undefined,
    openPostId: number | null

}

const initialState: InitialState = {
    posts: [],
    loading: false,
    error: null,
    openPostId: null


}

export const PostSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        openPostInfo: (state, action: PayloadAction<number>) => {

            if (state.openPostId !== action.payload) {
                state.openPostId = null
                state.openPostId = action.payload
            } else {
                state.openPostId = null

            }

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
                state.posts = action.payload.posts

            })
            .addMatcher(isAnyOf(getPosts.rejected), (state, action) => {

                state.loading = false
                state.error = action.payload
            })
    }

})

export const getPosts = createAsyncThunk<InitialState, void, { rejectValue: string }>(
    'get/posts',
    async (_, { rejectWithValue }) => {

        try {

            const request = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

            const data: Array<Post> = await request.json()

            const newState = {
                posts: data,
                loading: false,
                error: null,
                openPostId: null
            }

            return newState

        } catch (e: any) {
            return rejectWithValue('Ошибка загрузки данных')
        }
    }
)


export const PostReducer = PostSlice.reducer
export const { openPostInfo } = PostSlice.actions
