import React from 'react';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardPageLayout from '../pages/dashboard/DashboardPageLayout';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DefaultPage from '../pages/dashboard/DefaultPage';
import DashboardIndex from '../pages/dashboard/DashboardIndex';
import ChangelogPage from '../pages/changelog/ChanglogPage';
import AnalyticsPage from '../pages/dashboard/AnalyticsPage';
import SaasPage from '../pages/dashboard/SaasPage';
import TestChildPage from '../pages/changelog/TestChildPage';


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
        element: <ChangelogPage />,
        state: "client",
        sidebarProps: {
            displayText: "Clients",
            icon: <FormatListBulletedOutlinedIcon />
        }
        
    }
    
];

export default appRoutes;