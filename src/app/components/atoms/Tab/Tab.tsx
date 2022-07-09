import React from 'react';
import { Tab as MTab } from '@mui/material'
import TabProps from '../../../interfaces/atoms-Interfaces';


function Tab (props: TabProps) {

    return (
        <MTab label={props.title} value={props.value} />
    )
}

export { Tab }