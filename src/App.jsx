import React from 'react';
import Home from "./Pages/Home.jsx";
import SavedImage from "./Pages/SavedImage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/saved-images" element={ <SavedImage/>} />
                </Routes>
            </BrowserRouter>
        </>


    );
};

export default App;