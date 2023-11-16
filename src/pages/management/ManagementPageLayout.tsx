import React from 'react';
import { Outlet } from 'react-router';

type Props = {};

const ManagementLayoutPage = (props: Props) => {
    return (
        <div><Outlet /></div>
    );
}

export default ManagementLayoutPage;