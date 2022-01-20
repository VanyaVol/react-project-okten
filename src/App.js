import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import React from 'react';
import {Layout} from "./components/Layout/Layout";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {UserDetailsPage} from "./pages/UserDetailsPage/UserDetailsPage";
import {UserPostPage} from "./pages/UserPostPage/UserPostPage";
import {PostsDetailsPage} from "./pages/PostDetailsPage/PostsDetailsPage";

const App = () => {
    return (<>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostsDetailsPage/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>

        </>

    );
};

export default App;
