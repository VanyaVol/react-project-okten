import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {carsServices} from "../services/cars.services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carsServices.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

export const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {rejectWithValue, dispatch}) => {
        try {
            dispatch(deleteCar({id}));
            await carsServices.deleteCar(id);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    });

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carsServices.createCar(data);
            dispatch(addCar({data: newCar}));
        } catch (e) {
            console.log(e.message);
        }
    });

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({data}, {dispatch}) => {
        try {
            await carsServices.updateCar(data);
        } catch (e) {
            console.log(e.message);
        }
    });

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        form: {},
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        updateCar: (state, action) => {

        },
        formSet: (state, action) => {
            state.form = action.payload.car;

        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload;
        },
        [getAllCars.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
})

const carReducer = carSlice.reducer;

export const {addCar, deleteCar, formSet} = carSlice.actions;

export default carReducer;



