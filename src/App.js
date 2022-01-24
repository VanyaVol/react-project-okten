import {Routes, Route} from "react-router-dom";

import './App.css';
import {Layout} from "./components/Layout/Layout";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";


function App() {

    return (
        <div className="App">

            <Routes>
                <Route path={''} element={<Layout/>}>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
