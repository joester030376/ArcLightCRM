import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


const Searchbar = () => {
  return (
    <div>
        <SearchIcon />
        <TextField 
            id='outlined-basic'
            label='{placeholder}'
            //onChange={onChange} 
        />
    </div>
  );
}

export default Searchbar;