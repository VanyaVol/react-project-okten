import "./Launch.css";

function Launch({itemLaunch: {mission_name, launch_year, links: {mission_patch_small}}}) {
    return (
        <div className={'launch-block'}>

            <div className={'wrapper'}>
            <div>
                <h2>{mission_name}</h2>
                <h5>{launch_year}</h5>
            </div>

            <img src={mission_patch_small} alt={mission_name}/>
            </div>

        </div>
    );

}

export default Launch;