import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import appStyle from '../../App.module.css';
import css from './UserDetailsPage.module.css';
import {usersService} from "../../services/users.service";

const UserDetailsPage = () => {
    const [user, setUser] = useState(null);
    const {state: newUser} = useLocation();
    const {id: idParams} = useParams();

    const {id, name, username, email, phone, website, company, address} = {...user};
    const {zipcode, suite, city, street, geo} = {...address};

    useEffect(() => {
        if (newUser) {
            setUser(newUser);
            return;
        }
        usersService.getById(idParams).then(value => {
            setUser({...value});
        });

    }, [idParams]);

    return (<div>
        {user && <div className={css.details}>
            <h3>ID: {id}</h3>
            <h4 className={css.text}>{name}</h4>
            <h5>Username: {username}</h5>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Address: {zipcode}, {suite}, {city}, {street}, geo: {geo.lat}, {geo.lng}</p>
            <p>Website: {website}</p>
            <div className={css.company}>
                <h5>Company:</h5>
                <p>Name: {company.name}</p>
                <p>{company.bs}</p>
                <p>{company.catchPhrase}</p>
            </div>
            <Link to={'posts'}>
                <button className={appStyle.button}>Get posts user</button>
            </Link>
        </div>}
        <Outlet/>
    </div>);
};

export {UserDetailsPage};
