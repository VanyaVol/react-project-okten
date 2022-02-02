import React from 'react';
import {useSelector} from 'react-redux';

import carReducer from '../../store/car.slice';
import {Form, Cars, Loading} from '../../components';

const CarsPage = () => {
    const {status} = useSelector(state => state['carReducer']);

    return (<div>
        {status === 'pending' && <Loading/>}
        <Form/>
        <Cars/>
    </div>);
};

export {CarsPage};
