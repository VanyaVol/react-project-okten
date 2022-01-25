import {Routes, Route, Navigate} from "react-router-dom";

import './App.module.css';
import {Layout} from "./components/Layout/Layout";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";
import {EpisodesPage} from "./pages/EpisodesPage/EpisodesPage";
import {CharactersPage} from "./pages/CharactersPage/CharactersPage";


function App() {

    return (
        <div className="App">

            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route index element={<Navigate to={'episodes'}/>}/>
                    <Route path={'episodes'} element={<EpisodesPage/>}/>
                    <Route path={'episodes/:id/character'} element={<CharactersPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
