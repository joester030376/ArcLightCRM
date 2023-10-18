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
       {props.header}
        <CardContent>
          {props.content}
        </CardContent>
    </Card>
  );
}

export default BasicCard;