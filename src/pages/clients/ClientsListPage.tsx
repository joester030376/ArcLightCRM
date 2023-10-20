import React from 'react';
import BasicCard from '../../components/common/BasicCard';
import Searchbar from '../../components/common/Searchbar';
import {Grid, Typography} from '@mui/material';

type Props = {};

const ClientsListPage = () => {
     
    return (
        <Grid 
            item xs={8} 
        >
            <Typography variant="h3"
                sx={{
                    margin: '10px'
                }}
            >
                Clients
            </Typography>
            <BasicCard                
                header={<Searchbar searchByText='Search by client name' />}  
                content="test"               
            />
        </Grid>   
    );
}

export default ClientsListPage;