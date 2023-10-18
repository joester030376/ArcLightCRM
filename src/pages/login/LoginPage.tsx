import React from 'react';
import { useState } from 'react';
import assets from '../../assests';
import { Grid, Paper, Avatar, TextField, Typography, FormGroup , FormControlLabel, Checkbox, Button, Link} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const LoginPage = () => {  

    const PaperStyle = styled(Paper)(({ theme }) => ({ 
        width: 380,
        height: "70vh",
        padding: '20px',
        margin: "20% auto",
        ...theme.typography.body2,
        textAlign: 'center',
    }));

    const handleSubmit = () => {

    };

    return (
        <Grid
            container
            style={{minHeight: "100vh"}}        
        >
            <Grid item xs={12} sm={6}>
                <img src={assets.images.login} 
                    style={{width: '100%', height: '100vh', objectFit: 'cover' }} 
                    alt='brand' />
            </Grid>
            <Grid 
                container 
                item xs={12} sm={6}
                style={{padding: 10}}
                alignItems={'center'}              
                direction={'column'}                
            >
                <div />
                <div>
                    <Grid>
                       <PaperStyle variant="elevation" elevation={10}>
                            <Typography variant='h2'>ArcLight CRM</Typography>s
                            <Avatar
                                sx={{
                                    justifyContent: "center",
                                    display: "flex",
                                    margin: "5% auto",                                  
                                    bgcolor: blue[500]                                    
                                }}
                            >
                               <LockIcon />
                            </Avatar>

                            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"                                
                                sx={{
                                    margin: "auto",                                   
                                    width: '100%'
                                }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                type="password"                                
                                sx={{
                                    margin: "10px auto",
                                    width: '100%'
                                }}
                            />
                            <FormGroup>                                
                                <FormControlLabel control={<Checkbox />} label="Save Password" />                                
                            </FormGroup>
                            <Button
                                type='submit'
                                color='primary'
                                variant='contained'
                                fullWidth
                            >
                                Sign In
                            </Button>
                            <Typography 
                                sx={{
                                    marginTop: '20px',
                                    justifyContent: 'left'
                                }}    
                            >
                                <Link href="#"
                                    sx={{
                                        marginTop: '30px'
                                    }}
                                >
                                    Forgot Password? 
                                </Link>
                            </Typography>
                            </form>
                       </PaperStyle>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}

export default LoginPage;
