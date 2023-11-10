import React from 'react';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ClientsPageLayout from '../pages/clients/ClientsPageLayout';
import Person2Icon from '@mui/icons-material/Person2';
import Dashboard from '../pages/dashboard/Dashboard';


const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },     
    {
        path: "/dashboard",
        element: <Dashboard />,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon />
        }        
    },
    {
        path: "/clients",
        element: <ClientsPageLayout />,
        state: "clients",
        sidebarProps: {
            displayText: "Clients",
            icon: <Person2Icon />
        }        
    }
    
];

export default appRoutes;