import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import MyFooter from "./Myfooter";
import Koldun from "../pages/Koldun";
import Hasanova from "../pages/Hasanova";
import Daineko from "../pages/Daineko";
import Dubcova from "../pages/Dubcova";
import Gagarina from "../pages/Gagarina";
import Korni from "../pages/Korni";
import List from "../pages/List"
import Prihodko from "../pages/Prihodko";

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
            <MyFooter/>
        </div>
    );
};

export default AppRouter;