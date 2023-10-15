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
                index: true,
                element: <DashboardIndex />,
                state: "dasboard.index"                
            },
            {
                path: "/dashboard/default",
                element: <DefaultPage />,
                state: "dasboard.default",
                sidebarProps: {
                    displayText: "Default"
                }
            },
            {
                path: "/dashboard/analytics",
                element: <AnalyticsPage />,
                state: "dasboard.analytics",
                sidebarProps: {
                    displayText: "AnalyticsPage"
                }
            },
            {
                path: "/dashboard/saas",
                element: <SaasPage />,
                state: "dasboard.saas",
                sidebarProps: {
                    displayText: "SaasPage"
                }
            }                                   
        ]
    },
    {
        path: "/changelog",
        element: <ChangelogPage />,
        state: "changelog",
        sidebarProps: {
            displayText: "ChangeLog",
            icon: <FormatListBulletedOutlinedIcon />
        }
    }        
];

export default appRoutes;