import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import MyFooter from "./Myfooter";
import Koldun from "../pages/Koldun";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/koldun" element={<Koldun/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
            <MyFooter/>
        </div>
    );
};

export default AppRouter;