import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Pages/Home/Home';
import Assistir from './components/Pages/Assistir/Assistir';
import Favorites from "./components/Pages/Favoritos/index";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import FavoritesProvider from "./contexts/Favorites";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={ <Home />}></Route>
                    <Route path="/assistir/:id" element={<Assistir />} ></Route>
                    <Route path="/favorites" element={<Favorites />} ></Route>
                    <Route path="*" element={<PageNotFound />} ></Route>
                </Routes>
            </FavoritesProvider>
        </BrowserRouter>
    )
}

export default AppRouter;