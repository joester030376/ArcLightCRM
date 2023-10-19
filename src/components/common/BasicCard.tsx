import * as React from 'react';
import { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'

type ContentProps = {
  header: ReactNode
  content: string
}

const BasicCard = (props: ContentProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {props.header}  
          <div>
          {props.content}
          </div>        
        </CardContent>        
    </Card>
  );
}

export default BasicCard;