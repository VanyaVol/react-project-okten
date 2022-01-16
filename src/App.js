import React, {useState} from 'react';

import "./App.css";
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {posts} from "./services/posts.services";

const App = () => {
    const [user, setUser] = useState(null);
    const [arrPosts, setArrPosts] = useState([]);

    const getUserDetails = (user) => {
        setUser(user);
        setArrPosts([]);
    }

    const getUserPosts = (id) => {
        posts.getPostUser(id).then(arrPost => setArrPosts(arrPost));
    }

    return (
        <div className={'wrap'}>
            <div className={'users_block'}>
                <Users onGetUserDetails={getUserDetails}/>
                {user && <UserDetails user={user} onGetUserPosts={getUserPosts}/>}
            </div>
            {!!arrPosts.length && <Posts arrPosts={arrPosts}/>}
        </div>
    );
};

export default App;
