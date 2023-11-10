import { Avatar, Button, Checkbox, FormControlLabel, FormGroup, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import assets from '../../assests';
import { blue } from '@mui/material/colors';
import LockIcon from '@mui/icons-material/Lock';import { styled } from '@mui/material/styles';

type Props = {};

const HomePage = (props: Props) => {

    const PaperStyle = styled(Paper)(({ theme }) => ({ 
        width: 380,
        height: "40vh",
        padding: '20px',
        margin: "25% auto",
        ...theme.typography.body2,
        textAlign: 'center',
    }));


    return (
        <Grid
            container
            style={{minHeight: "100vh"}}       
        >
            <Grid 
                container 
                item xs={12} sm={6}
                style={{padding: 10}}
                alignItems={'center'}              
                direction={'column'}                
            >
            </Grid>
        </Grid>
    );
}

export default HomePage;