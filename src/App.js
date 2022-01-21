import {useEffect, useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userServices} from "./services/user.service";

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userServices.getAll().then(value => {
            setUsers([...value]);
            setFilteredUsers([...value]);
        });

    }, []);

    const getFilter = (data) => {

        let filter = [...users];

        if (data.name) {
            filter = filter.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()));
        }

        if (data.username) {
            filter = filter.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()));
        }

        if (data.email) {
            filter = filter.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()));
        }

        setFilteredUsers(filter);
    }

    return (
        <div className="App">

            <Form getFilter={getFilter} users={users}/>
            <Users users={filteredUsers}/>
            <div>
                ivan
            </div>

        </div>
    );
}

export default App;
