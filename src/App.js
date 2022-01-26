import {Routes, Route, Navigate} from 'react-router-dom';

import './App.module.css';
import {Layout} from './components/Layout/Layout';
import {CharactersPage, EpisodesPage, NotFoundPage} from './pages';

function App() {
    return (<div className="App">
        <Routes>
            <Route path={''} element={<Layout/>}>
                <Route index element={<Navigate to={'episodes'}/>}/>
                <Route path={'episodes'} element={<EpisodesPage/>}/>
                <Route path={'episodes/:id/character'} element={<CharactersPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </div>);
}

export default App;
