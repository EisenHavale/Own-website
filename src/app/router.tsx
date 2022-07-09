import React from "react";
import {Route, Routes } from "react-router-dom";

import { Home } from './pages/Home'
import { AboutMe } from './pages/About-me'
import { Profile } from './pages/Profile'
import { Projects } from './pages/Project'


export function Navigator (){
    return (
        <Routes>
            <Route path='/' element={Home}></Route>
            <Route path='*' element={Home}></Route>
            <Route path='/about-me' element={AboutMe}></Route>
            <Route path='/profile' element={Profile}></Route>
            <Route path='/projects' element={Projects}></Route>
        </Routes>
    );
}