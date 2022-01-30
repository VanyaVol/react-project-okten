import {createSlice} from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: []
    },
    reducers: {
        addCat: (state, action) => {

        },
        deleteCar: (state, action) => {

        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar} = createSlice.actions;

export default carReducer;



