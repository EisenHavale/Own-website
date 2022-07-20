import React from "react";
import {Route, Routes } from "react-router-dom";

import { Header } from './components/organisms/Header/Header';
import { Home } from './pages/Home'
import { AboutMe } from './pages/About-me'
import { Profile } from './pages/Profile'
import { Projects } from './pages/Project'
import { navigationInformation } from "./enums/Navigation";


export const Navigator = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path={navigationInformation.home.path} element={<Home/>}></Route>
                <Route path={navigationInformation.aboutMe.path} element={<AboutMe/>}></Route>
                <Route path={navigationInformation.profile.path} element={<Profile/>}></Route>
                <Route path={navigationInformation.projects.path} element={<Projects/>}></Route>
            </Routes>
        </>
    );
}