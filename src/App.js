import {Routes, Route, Navigate} from "react-router-dom";
import React from 'react';

import './App.module.css';
import {Layout} from "./components/Layout/Layout";
import {
    AlbumsPage,
    UsersPage,
    PostsPage,
    NotFoundPage,
    PhotosPage,
    UserDetailsPage,
    UserPostPage,
    PostsDetailsPage,
    CommentsPage
} from "./pages/";


const App = () => {
    return (<>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>
                        <Route path={':userId/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
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
