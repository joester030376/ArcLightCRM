import React from 'react';
import { ButtonBase, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { hover } from '@testing-library/user-event/dist/hover';

type Props = {}

const AddItemButton = () => {

    return (
        <ButtonBase disableRipple
            sx={{
                padding: "5px",
                margin: "5px",
                color: '#0095fa',
                borderRadius: '5px',
                "&:hover" : {
                    backgroundColor: '#0095fa',
                    color: 'white'
                }
                
            }}
        >
            <AddIcon />
            <Typography>
                Add
            </Typography>
        </ButtonBase>
    );
};

export default AddItemButton;