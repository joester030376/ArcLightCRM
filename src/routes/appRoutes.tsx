import React from 'react';
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ClientsPageLayout from '../pages/application/clients/ClientsPageLayout';
import Person2Icon from '@mui/icons-material/Person2';
import Dashboard from '../pages/dashboard/Dashboard';
import AddClient from '../pages/application/clients/AddClient';
import ClientList from '../pages/application/clients/ClientList';
import AgentList from '../pages/application/agents/AgentList';
import AddAgent from '../pages/application/agents/AddAgent';
import AgentsPageLayout from '../pages/application/agents/AgentsPageLayout';
import SubscriptionList from '../pages/management/subscriptions/SubscriptionList';
import SubscriptionPageLayout from '../pages/management/subscriptions/SubscriptionPageLayout';
import AddSubscription from '../pages/management/subscriptions/AddSubscription';
import ChatPage from '../pages/application/chat/ChatPage';


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
        path: "/chat",
            element: <ChatPage />,
            state: 'application',
            sidebarProps: {
                displayText: "Chat",
                icon: <ChatIcon />
        }
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