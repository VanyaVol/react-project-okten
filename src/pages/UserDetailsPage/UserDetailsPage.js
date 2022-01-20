import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {usersService} from "../../services/users.service";
import {Outlet} from "react-router-dom";


const UserDetailsPage = () => {
    const [user, setUser] = useState(null);
    const {state: newUser} = useLocation();
    const {id: idParams} = useParams();

    useEffect(() => {
        if (newUser) {
            setUser(newUser);
            return;
        }

        usersService.getById(idParams).then(value => {
            setUser({...value});
        });

    }, [idParams]);

    const {id, name, username, email, phone, website, company, address} = {...user};
    const {zipcode, suite, city, street, geo} = {...address};

    return (
        <div>
            {user && <div>
                <h3>ID: {id}</h3>
                <h4>{name}</h4>
                <h5>Username: {username}</h5>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Address: {zipcode}, {suite}, {city}, {street}, geo: {geo.lat}, {geo.lng}</p>
                <p>Website: {website}</p>
                <div>
                    <h5>Company:</h5>
                    <p>Name: {company.name}</p>
                    <p>{company.bs}</p>
                    <p>{company.catchPhrase}</p>
                </div>
                <Link to={'posts'}>
                    <button>Get posts user</button>
                </Link>
            </div>}
            <Outlet/>
        </div>);
};

export {UserDetailsPage};
