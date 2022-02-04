import React, { FC } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Dashboard } from "../Dashboard";
import { RouterPaths, TRouterPath } from './RouterConfig';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {RouterPaths.map((i:TRouterPath) => <Route path={'asdadaw'} element={<Dashboard />} key={i.id}/>)}
            </Routes>
        </BrowserRouter>
    )
}

export default Router
