import {Routes, Route, Navigate} from "react-router-dom";
import React from 'react';

import './App.module.css';
import {Layout} from "./components/Layout/Layout";
import {
    UsersPage, PostsPage, NotFoundPage, UserDetailsPage, UserPostPage, PostsDetailsPage, CommentsPage
} from "./pages/";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";

const App = () => {
    return (<>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>
                        <Route path={':albumId/albums'} element={<AlbumsPage/>}>

                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostsDetailsPage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </>

    );
};

export default App;
