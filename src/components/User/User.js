import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div>
            <h4>{id}. {name}</h4>
            <Link to={`${id}`} state={user}>
                <button>Get user details</button>
            </Link>
        </div>
    );
};

export {User};
