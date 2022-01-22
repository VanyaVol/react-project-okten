import {useState} from "react";

import './App.css';
import {Form} from "./components/Form/Form";
import {Cars} from "./components/Cars/Cars";
import {carsServices} from "./services/cars.services";

function App() {
    const [update, setUpdate] = useState({});
    const [formError, setFormError] = useState(null);
    const [carForm, setCarForm] = useState({});

    const newCar = async (car) => {
        let carObj;

        try {
            if (carForm.id) {
                carObj = await carsServices.updateCar(carForm.id, car);
            } else {
                carObj = await carsServices.createNew(car);
            }

            setUpdate(carObj);
            setCarForm({});

        } catch (error) {
            setFormError(error.response.data);
        }

    }

    const updateCar = (car) => {
        setCarForm(car);
    }

    const deleteCar = (id) => {
        carsServices.deleteById(id).then(value => setUpdate(value));
    }

    return (<div className="App">
        <Form newCar={newCar} formError={formError} carForm={carForm}/>
        <Cars newCar={newCar} update={update} deleteCar={deleteCar} updateCar={updateCar}/>
    </div>);
}

export default App;
