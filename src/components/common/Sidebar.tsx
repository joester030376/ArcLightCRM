import * as React from 'react';
import { Drawer, List, Toolbar, Stack, Avatar, ListItemButton, ListItemIcon } from '@mui/material';
import sizeConfigs from '../../configs/sizeConfigs';
import assets from '../../assests';
import colorConfigs from '../../configs/colorConfigs';
import appRoutes from '../../routes/appRoutes';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarItemCollapse';
import { useAuth0 } from '@auth0/auth0-react';

const Sidebar = () => {

    const { isAuthenticated } = useAuth0();

    return ( 
        <div>
            {!isAuthenticated && (
                <Drawer
                    variant="permanent"
                    sx={{
                        width: sizeConfigs.sidebar.width,
                        flexShrink: 0,
                        "& .MuiDrawer-paper" : {
                            width: sizeConfigs.sidebar.width,
                            boxSizing: "border-box",
                            borderRight: "0px",
                            backgroundColor: colorConfigs.sidebar.bg,
                            color: colorConfigs.sidebar.color                   
                        }
                    }}  
                >
                    <Toolbar sx={{ marginBottom: "20px"}} >
                        <Stack
                            sx={{width: "100%"}}
                            direction="row"
                            justifyContent="center"  
                        >               
                            <Avatar src={assets.images.logo} style={{borderRadius: 5}} />
                        </Stack> 
                    </Toolbar>  

                </Drawer>
            )}
            {isAuthenticated && (
                <Drawer
                variant="permanent"
                sx={{
                    width: sizeConfigs.sidebar.width,
                    flexShrink: 0,
                    "& .MuiDrawer-paper" : {
                        width: sizeConfigs.sidebar.width,
                        boxSizing: "border-box",
                        borderRight: "0px",
                        backgroundColor: colorConfigs.sidebar.bg,
                        color: colorConfigs.sidebar.color                   
                    }
                }}  
            >
                <List disablePadding>
                    <Toolbar sx={{ marginBottom: "20px"}} >
                        <Stack
                            sx={{width: "100%"}}
                            direction="row"
                            justifyContent="center"  
                        >               
                            <Avatar src={assets.images.logo} style={{borderRadius: 5}} />
                        </Stack> 
                    </Toolbar>   
                        {appRoutes.map((route, index) => (
                            route.sidebarProps ? (
                                route.child ? (
                                    <SidebarItemCollapse item={route} key={index} />
                                ) : (
                                    <SidebarItem item={route} key={index} />
                                )
                            ) : null
                        ))}                            
                </List>
            </Drawer> 
            )}
        </div>
    );
}

export default Sidebar;