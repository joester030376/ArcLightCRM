import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import appRoutes from '../../routes/appRoutes';
import assets from '../../assests';
import SidebarItem from './SidebarItem';
import SidebarItemCollapse from './SidebarCollapse';
import Topbar from './Topbar';

const drawerWidth = 240;

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Avatar src={assets.images.logo} style={{borderRadius: 5}} />   
        <Typography>
            ArcLight CRM
        </Typography>
      </Toolbar>      
      
        <List disablePadding>
          <ListItemText primary="Dashboard" 
            primaryTypographyProps={{
              fontSize: 15,
              fontWeight: 'medium',
              lineHeight: '20px',
              mb: '2px',
            }}
            sx={{
              paddingY: "12px",
              paddingX: "24px"
            }}
          
          />                 
            {appRoutes.map((route, index) => (
              route.state === "dashboard" ? (
                route.sidebarProps ? (
                  route.child ? (
                      <SidebarItemCollapse item={route} key={index} />
                          ) : (
                          <SidebarItem item={route} key={index} />
                          )
                          ) : null
              ) : null                
            ))}                            
        </List>

        <List disablePadding>
          <ListItemText primary="Application" 
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
          }}
          sx={{
            paddingY: "12px",
            paddingX: "24px"
          }}/>                 
            {appRoutes.map((route, index) => (
              route.state === "application" ? (
                route.sidebarProps ? (
                  route.child ? (
                      <SidebarItemCollapse item={route} key={index} />
                          ) : (
                          <SidebarItem item={route} key={index} />
                          )
                          ) : null
              ) : null                
            ))}                            
        </List>

        <List disablePadding>
          <ListItemText primary="Management" 
          primaryTypographyProps={{
            fontSize: 15,
            fontWeight: 'medium',
            lineHeight: '20px',
            mb: '2px',
          }}
          sx={{
            paddingY: "12px",
            paddingX: "24px"
          }}/>                 
            {appRoutes.map((route, index) => (
              route.state === "management" ? (
                route.sidebarProps ? (
                  route.child ? (
                      <SidebarItemCollapse item={route} key={index} />
                          ) : (
                          <SidebarItem item={route} key={index} />
                          )
                          ) : null
              ) : null                
            ))}                            
        </List>     
    </div>
  );  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar      
        position="fixed"
        sx={{
            background: "transparent",
            boxShadow: "none",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            style={{ color: '#233044' }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon

            />
          </IconButton>  
          <Topbar />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>      
    </Box>
  );
}