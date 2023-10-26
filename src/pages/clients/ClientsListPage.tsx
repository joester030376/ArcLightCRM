import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography} from '@mui/material';
import ImportButton from '../../components/common/ImportButton';
import ExportButton from '../../components/common/ExportButton';
import AddItemButton from '../../components/common/AddItemButton';
import { DataGrid, GridColDef} from '@mui/x-data-grid';


const ClientsListPage = () => { 

  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        let response = await axios.get('http://localhost:8080/clients');
        setClientList(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchClients();
  }, []);

  const columns: GridColDef[] = [
    {field: "id", headerName: 'ID', width: 90 },
    {field: "full_name", headerName: "Client Name", width: 200},
    {field: "email_address", headerName: "Email", width: 200},    
    {field: "country", headerName: "Country", width: 100}, 
    {field: "state", headerName: "State", width: 100},  
    {field: "address", headerName: "Address", width: 200},     
    {field: "state", headerName: "State", width: 100},        
    {field: "zipcode", headerName: "Zipcode", width: 100}, 
    {field: "phone_number", headerName: "Phone", width: 200} 
  ];

  return (
    <Box
      sx={{
        height: '100vh - 100',
        width: '100%'
      }}  
    >
      
      <Typography
        variant="h3"
        component="h3"
      >
        Clients
      </Typography>
      <Box>
        <ImportButton />
        <ExportButton />
        <AddItemButton />
      </Box>
      <DataGrid
        rows={clientList}
        columns={columns} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,
            },
          },
        }} 
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick          
      />   
    </Box>
  )

}

export default ClientsListPage;