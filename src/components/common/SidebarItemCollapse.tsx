import React from 'react';
import { useState } from 'react';
import { RouteType } from '../../routes/config';
import { ListItemButton, ListItemIcon, ListItemText, Typography, Collapse, List } from '@mui/material';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import colorConfigs from '../../configs/colorConfigs';
import SidebarItem from './SidebarItem';

type Props = {
    item: RouteType;
};

const SidebarItemCollapse = ({ item }: Props ) => {

    const [open, setOpen] = useState(false);

    return (
        item.sidebarProps ? (
            <>
            <ListItemButton   
                onClick={() => setOpen(!open)}             
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg
                    },
                    paddingY: "12px",
                    paddingX: "24px"
                }}
            >
                <ListItemIcon
                    sx={{color: colorConfigs.sidebar.color
                    }}
                >
                    {item.sidebarProps.icon && item.sidebarProps.icon}
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography>
                            {item.sidebarProps.displayText}
                        </Typography>
                    }
                />
                {open ?  <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}                    
            </ListItemButton>  
            <Collapse in={open} timeout="auto">
                <List>
                {item.child?.map((route, index) => (
                        route.sidebarProps ? (
                            route.child ? (
                                <SidebarItemCollapse item={route} key={index} />
                            ) : (
                                <SidebarItem item={route} key={index} />
                            )
                        ) : null
                    ))}  
                </List>
            </Collapse>              
            </>
        ) : null
    );
}

export default SidebarItemCollapse;