import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsServices} from "../services/posts.services";

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_,{rejectWithValue}) => {
        try {
            return await postsServices.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        status: null,
        errors: null
    },
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state, action)=>{
            state.status = 'pending';
            state.errors = null;
        },
        [getAllPosts.fulfilled]: (state, action)=>{
            state.posts = action.payload;
            state.status = 'fulfilled';
        },
        [getAllPosts.rejected]: (state, action)=>{
            console.log(action.payload);
        }
    }
});

const postReducer = postSlice.reducer;

export default postReducer;

const {} = postSlice.actions;