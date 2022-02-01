import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {usersService} from "../services/users.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await usersService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const userSlice = createSlice({
        name: 'userSlice',
        initialState: {
            users: [],
            status: null,
            error: null
        },
        reducers: {
            addUser: (state, action) => {

            }
        },
        extraReducers: {
            [getAllUsers.pending]: (state, action) => {
                state.status = 'pending';
                state.error = null;
            },

            [getAllUsers.fulfilled]: (state, action) => {
                state.status = 'fulfilled';
                state.users = action.payload;
            },

            [getAllUsers.rejected]: (state, action)=> {
                console.log(action.payload);
            }
        }
    })
;


const userReducer = userSlice.reducer;

export default userReducer;

export const {addUser} = userSlice.actions;