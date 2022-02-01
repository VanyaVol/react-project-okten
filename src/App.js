import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Layout} from "./components/Layout/Layout";
import {CarsPage} from "./pages/CarsPage/CarsPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {PostsPage} from "./pages/PostsPage/PostsPage";
import {UsersPage} from "./pages/UsersPage/UsersPage";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>


        </>
    );
}

export default App;
