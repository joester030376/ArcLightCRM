import * as React from 'react';
import { ReactNode } from 'react';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent'
import ImportButton from './ImportButton';
import ExportButton from './ExportButton';
import AddItemButton from './AddItemButton';

type ContentProps = {
  header: ReactNode
  content: string
}

const BasicCard = (props: ContentProps) => {
  return (
    <div>
      <Box>
        <ImportButton />
        <ExportButton />
        <AddItemButton />
      </Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {props.header}  
          <div>
          {props.content}
          </div>        
        </CardContent>        
      </Card>
    </div>
    
  );
}

export default BasicCard;