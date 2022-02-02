import React from 'react';
import {Form} from "../../components/Form/Form";
import {Cars} from "../../components/Cars/Cars";
import appCss from '../../App.module.css';
import {Loading} from "../../components/Loading/Loading";
import {useSelector} from "react-redux";
import carReducer from "../../store/car.slice";

const CarsPage = () => {
    const {status} = useSelector(state => state['carReducer']);

    return (
        <div className={appCss.wrap}>
            {status === 'pending' && <Loading/>}
            <Form/>
            <Cars/>
        </div>
    );
};

export {CarsPage};
