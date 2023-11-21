import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, gridPageCountSelector, gridPaginationModelSelector, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';


const onButtonClick = (e: React.ChangeEvent<any> , row: any) => {
    e.stopPropagation();
    console.log(row);
}

const onEditClick = (e: React.ChangeEvent<any> , row: any) => {
    e.stopPropagation();
    console.log(row);
}

function CustomPagination() {
    const apiRef = useGridApiContext();
    const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
        <Stack spacing={2}>
            <Pagination
                variant="outlined" 
                shape="rounded"                
                count={pageCount}
                page={paginationModel.page + 1}
                onChange={(event, value) => apiRef.current.setPage(value - 1)}
            />
        </Stack>
    );
  }

const columns: GridColDef[] = [
  { field: 'id', 
    headerName: 'ID', 
    flex: .5,
    minWidth: 100 
},
  {
    field: 'firstName',
    headerName: 'First name',
    flex: .5,
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: .5,
    width: 200,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    flex: .5,
    width: 200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    flex: .5,
    width: 200,
    editable: true,
  },
 
    { field: 'actions', headerName: 'Actions', flex: .5, width: 200, renderCell: (params) => {
        return (
            <Box sx={{ justifyContent: "flex-end" }} >
                <Button
                    sx={{ 
                        minHeight: 0, 
                        minWidth: 0, 
                        padding: 1 
                    }}
                    onClick={(e) => onEditClick(e, params.row)}                
                >
                    <Tooltip title="view">
                        <VisibilityIcon
                            sx={{
                                fontSize: "large",
                                color: "#a3a3a3",
                                "&:hover" : {
                                    color: "#7a7979",
                                }                            
                            }}       
                        />
                    </Tooltip>
                </Button>
                <Button
                    sx={{ 
                        minHeight: 0, 
                        minWidth: 0, 
                        padding: 1                         
                    }}
                    onClick={(e) => onEditClick(e, params.row)}                
                >
                    <Tooltip title="edit">
                        <BorderColorOutlinedIcon 
                            sx={{
                                fontSize: "large",
                                color: "#4289c7",
                                "&:hover" : {
                                    color: "#2469a6"
                                }
                            }}   
                        />
                    </Tooltip>
                </Button>
                <Button               
                    sx={{ 
                        minHeight: 0, 
                        minWidth: 0, 
                        padding: 1                     
                    }}
            
                    onClick={(e) => onButtonClick(e, params.row)}                          
                >
                    <Tooltip title="delete">
                        <DeleteOutlinedIcon
                            sx={{
                                fontSize: "large",
                                color: "#e03434",
                                "&:hover" : {
                                    color: "#e61717"
                                }
                            }}  
                        />
                    </Tooltip>
                </Button>
            </Box>          
        );
      } }      
 
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: "JonSnow@gmail.com", phone: "555-444-3333" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function ClientList() {
  return (
    <Box sx={{ height: "80%", margin: "auto", width: "80%" }}>
        <Paper elevation={1}>
            <DataGrid               
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {            
                paginationModel: {
                    pageSize: 10,
                },
            },
        }}
                components={{
                    Pagination: CustomPagination,
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                autoHeight={true}
            />
        </Paper>
    </Box>
  );
}