import React from 'react';
import { Tabs as MNavBar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../atoms/Tab/Tab';
import { navigationInformation } from '../../../enums/Navigation';


const NavBar = () => {
    return (
        <MNavBar>
            <NavLink to={navigationInformation.home.path}>
                <Tab title={navigationInformation.home.label} />
            </NavLink>
            <NavLink to={navigationInformation.aboutMe.path}>
                <Tab title={navigationInformation.aboutMe.label} />
            </NavLink>
            <NavLink to={navigationInformation.profile.path}>
                <Tab title={navigationInformation.profile.label} />
            </NavLink>
            <NavLink to={navigationInformation.profile.path}>
                <Tab title={navigationInformation.projects.label} />
            </NavLink>
        </MNavBar>
    )
}   

export { NavBar }