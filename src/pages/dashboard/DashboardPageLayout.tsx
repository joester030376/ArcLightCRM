import React from 'react';
import { Outlet } from 'react-router';

const DashboardPageLayout = () => {
    return (
        <div><Outlet /></div>
    );
}

export default DashboardPageLayout;