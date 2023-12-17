import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Koldun from "../pages/Koldun/Koldun";
import Hasanova from "../pages/Hasanova/Hasanova";
import Daineko from "../pages/Daineko/Daineko";
import Dubcova from "../pages/Dubcova/Dubcova";
import Gagarina from "../pages/Gagarina/Gagarina";
import Korni from "../pages/Korni/Korni";
import List from "../pages/List/List"
import Prihodko from "../pages/Prihodko/Prihodko";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path = "/list" element ={<List/>}/>
                <Route path="/koldun" element={<Koldun/>}/>
                <Route path="/daineko" element={<Daineko/>}/>
                <Route path="/dubcova" element={<Dubcova/>}/>
                <Route path="/gagarina" element={<Gagarina/>}/>
                <Route path="/hasanova" element={<Hasanova/>}/>
                <Route path="/korni" element={<Korni/>}/>
                <Route path="/prihodko" element={<Prihodko/>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;