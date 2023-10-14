import React from 'react';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardPageLayout from '../pages/dashboard/DashboardPageLayout';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DefaultPage from '../pages/dashboard/DefaultPage';

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
        },
        child: [
            {
                path: "/dashboard/default",
                element: <DefaultPage />,
                state: "dasboard.default",
                sidebarProps: {
                    displayText: "Default"
                }

            }
            
        ]
    }
];

export default appRoutes;