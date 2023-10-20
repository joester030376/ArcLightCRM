import React from 'react';
import { ButtonBase, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

type Props = {}

const ExportButton = () => {

    return (
        <ButtonBase disableRipple
            sx={{
                padding: "5px",
                margin: "5px",                
                borderRadius: '5px',
                "&:hover" : {
                    backgroundColor: 'lightGray'                    
                }
            }}
        >
            <FileUploadIcon />
            <Typography>
                Export
            </Typography>
        </ButtonBase>
    );
};

export default ExportButton;