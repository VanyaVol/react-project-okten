import './App.css';
import {Routes, Route} from "react-router-dom";

import React from 'react';
import {Layout} from "./components/Layout/Layout";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {PostsPage} from "./pages/PostsPage/PostsPage";

const App = () => {
    return (<>
            <Routes>
                <Route path={'/'} element={<Layout/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                <Route/>
            </Routes>

        </>

    );
};

export default App;
