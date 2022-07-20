import React, { ReactElement } from 'react';

import { IconButton as MIcon, Icon, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IData {
    children: ReactElement;
}

export const IconButton = (props: IData)=> {
    const children = props.children;
    return (
        <MIcon size="large">
            {children}
        </MIcon>
    )
}