import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsServices} from "../services/comments.services";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return commentsServices.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: {
        comments: [],
        status: null,
        errors: null
    },
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'pending';
            state.errors = null;
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.comments = action.payload;
        },
        [getAllComments.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }
});

const commentReducer = commentSlice.reducer;

export default commentReducer;

const {} = commentSlice.actions;