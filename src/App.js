import {Routes, Route} from 'react-router-dom';

import {Layout} from './components';
import {CarsPage, HomePage, PostsPage, UsersPage, CommentsPage, NotFoundPage} from './pages';

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
