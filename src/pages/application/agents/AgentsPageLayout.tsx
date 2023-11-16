import React from 'react';
import { Outlet } from 'react-router';

type Props = {};

const AgentsPageLayout = (props: Props) => {
    return (
        <div><Outlet /></div>
    );
}

export default AgentsPageLayout;