import React from 'react';
import { ButtonBase, IconButton, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

type Props = {}

const ImportButton = () => {

    return (
        <ButtonBase disableRipple
            sx={{
                padding: "5px",
                margin: "5px",
                borderRadius: "5px",
                "&:hover" : {
                    backgroundColor: "lightGray"
                }
            }}
        >
            <DownloadIcon />
            <Typography>
                Import
            </Typography>
        </ButtonBase>
    );
};

export default ImportButton;