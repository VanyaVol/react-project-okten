import './App.css';
import {Form} from "./components/Form/Form";
import {Cars} from "./components/Cars/Cars";
import {carsServices} from "./services/cars.services";
import {useState} from "react";

function App() {
    const [newCarState, setNewCarState] = useState({});
    const [formError, setFormError] = useState(null);

    const newCar = async (car) => {
        try {
            const carObj = await carsServices.createNew(car);
            setNewCarState(carObj);
        } catch (error) {
            setFormError(error.response.data);
        }
    }

    return (<div className="App">
        <Form newCar={newCar} formError={formError}/>
        <Cars newCar={newCar} newCarState={newCarState}/>
    </div>);
}

export default App;
