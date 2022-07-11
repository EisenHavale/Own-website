import React from 'react';
import { Tab as MTab } from '@mui/material'
import TabProps from '../../../interfaces/atoms-Interfaces';


const Tab = (props: TabProps)=> {

    return (
        <MTab label={props.title} />
    )
}

export { Tab }