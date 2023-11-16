import React from 'react';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ClientsPageLayout from '../pages/clients/ClientsPageLayout';
import Person2Icon from '@mui/icons-material/Person2';
import Dashboard from '../pages/dashboard/Dashboard';
import AddClient from '../pages/clients/AddClient';
import DeleteClient from '../pages/clients/ClientList';
import ClientList from '../pages/clients/ClientList';
import AgentList from '../pages/agents/AgentList';
import AddAgent from '../pages/agents/AddAgent';
import AgentsPageLayout from '../pages/agents/AgentsPageLayout';
import ManagementLayoutPage from '../pages/management/ManagementPageLayout';
import SubscriptionList from '../pages/management/subscriptions/SubscriptionList';
import SubscriptionPageLayout from '../pages/management/subscriptions/SubscriptionPageLayout';
import AddSubscription from '../pages/management/subscriptions/AddSubscription';


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
        state: "application",
        sidebarProps: {
            displayText: "Clients",
            icon: <Person2Icon />
        },
        child: [
            {
                path: "/clients/clientlist",
                element: <ClientList />,
                state: 'application.clientlist',
                sidebarProps: {
                    displayText: "Client List",
                    icon: <FiberManualRecordIcon />
                }
            },
            {
                path: "/clients/deleteclient",
                element: <AddClient />,
                state: 'application.addclient',
                sidebarProps: {
                    displayText: "Add Client",
                    icon: <FiberManualRecordIcon />
                }
            }
        ]        
    },
    {
        path: "/agents",
        element: <AgentsPageLayout />,
        state: "application",
        sidebarProps: {
            displayText: "Agents",
            icon: <Person2Icon />
        },
        child: [
            {
                path: "/agents/agentlist",
                element: <AgentList />,
                state: 'application.agentlist',
                sidebarProps: {
                    displayText: "Agent List",
                    icon: <FiberManualRecordIcon />
                }
            },
            {
                path: "/agents/addagent",
                element: <AddAgent />,
                state: 'application.addagent',
                sidebarProps: {
                    displayText: "Add Agent",
                    icon: <FiberManualRecordIcon />
                }
            }
        ] 
    },
    {
        path: "/subscription",
            element: <SubscriptionPageLayout />,
            state: 'management',
            sidebarProps: {
                displayText: "Subscription",
                icon: <FiberManualRecordIcon />
        }, 
        child: [
            {
                path: "/subscription/subscriptionlist",
                element: <SubscriptionList />,
                state: 'management.subscriptionlist',
                sidebarProps: {
                    displayText: "Subscription List",
                    icon: <FiberManualRecordIcon />
                }
            },
            {
                path: "/subscription/addsubscription",
                element: <AddSubscription />,
                state: 'management.addsubscription',
                sidebarProps: {
                    displayText: "Add Subscription",
                    icon: <FiberManualRecordIcon />
                }
            }
        ]   
    }
];

export default appRoutes;