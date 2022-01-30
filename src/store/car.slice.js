import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {carsServices} from "../services/cars.services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async () => {
        try {
            return await carsServices.getAll();
        } catch (e) {

        }
    }
);

const carSlice = createSlice({
    name: 'carSlice', initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {

        },
        deleteCar: (state, action) => {

        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.state = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.state = 'fulfilled'
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {

        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = carSlice.actions;

export default carReducer;



