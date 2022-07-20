import React from 'react';
import { Tabs as MNavBar, Grid} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../atoms/Tab/Tab';
import { navigationInformation } from '../../../enums/Navigation';
import { GitHub, LinkedIn, Facebook } from '@mui/icons-material';
import { IconButton } from '../../atoms/Icon/Icon';


const NavBar = () => {
    return (
        <Grid container spacing={2}>
            <Grid container item xs={8} md={10} >
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
            </Grid>
            <Grid item xs={4} md={2} sx={{}}>
                <IconButton children={<GitHub />}/>
                <IconButton children={<LinkedIn />}/>
                <IconButton children={<Facebook />}/>
            </Grid>
        </Grid>
    )
}   

export { NavBar }