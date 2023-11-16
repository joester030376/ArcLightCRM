import React from 'react';
import { Outlet } from 'react-router';

type Props = {};

const ClientsPageLayout = (props: Props) => {
    return (
        <div><Outlet /></div>
    );
}

export default ClientsPageLayout;