import React from 'react';
import {useState} from 'react';
import { Box, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { Params } from 'react-router';

type Props = {
    params: Params
    rowId: string
}

const UserActions = ({params, rowId}: Props) => {

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);



    return (
        <div>test</div>        
    );
}

export default UserActions;