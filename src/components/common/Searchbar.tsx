import React from 'react';
import {Grid, TextField, IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type searchBarProps = {
    searchByText: string
}

const Searchbar = (searchBarValues: searchBarProps) => {
    
    return (
        <Grid>
            <TextField
                fullWidth
                id="standard-bare"
                variant="outlined"
                defaultValue={searchBarValues.searchByText}
                InputProps={{
                  startAdornment: (                    
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                  ),
                }}
              />
        </Grid>
    );
}

export default Searchbar;