import React from 'react';
import { Outlet } from 'react-router';

type Props = {};

const ChangelogPage = (props: Props) => {
    return (
        <div><Outlet /></div>
    );
}

export default ChangelogPage;