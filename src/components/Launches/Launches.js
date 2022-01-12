import {useEffect, useState} from "react";

import "./Launches.css";
import getLaunches from "../../API";
import Launch from "../Launch/Launch";

function Launches() {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        getLaunches().then(arrLaunches => setLaunches(arrLaunches.filter(value => value.launch_year !== '2020')));
    }, []);



    return (
        <div className={'launches-block'}>

            {
                launches.map(itemLaunch => <Launch key={itemLaunch.flight_number} itemLaunch={itemLaunch}/>)
            }

        </div>
    );

}

export default Launches;