import {useEffect, useState} from "react";

import css from'./App.module.css';
import {axiosServices} from "./services/axios.services";
import {Image} from "./components/Image/Image";
import {Buttons} from "./components/Buttons/Buttons";

function App() {
    const [update, setUpdate] = useState('car');
    const [trigger, setTrigger] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);

    const newImage = () => {
        setTrigger({});
    }

    useEffect(() => {
        axiosServices.get('', {params: {tag: update}}).then(value => setImgSrc(value.request.responseURL));
    }, [trigger]);

    return (<div className={css.image}>

        <Image imgSrc={imgSrc} newImage={newImage}/>

        <Buttons setUpdate={setUpdate} newImage={newImage}/>

    </div>);
}

export default App;
