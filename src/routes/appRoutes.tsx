import React from 'react';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardPageLayout from '../pages/dashboard/DashboardPageLayout';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ClientsPageLayout from '../pages/clients/ClientsPageLayout';
import ClientsListPage from '../pages/clients/ClientsListPage';
import Person2Icon from '@mui/icons-material/Person2';


const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },     
    {
        path: "/dashboard",
        element: <DashboardPageLayout />,
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
        },
        child: [
            {
                index: true,
                path: "/clients/clientlist",
                element: <ClientsListPage />,
                state: "client.clientlist",
                sidebarProps: {
                    displayText: "Client List"
                }
            }
        ]
        
    }
    
];

export default appRoutes;