import React from 'react';
import { Outlet } from 'react-router';

type Props = {};

const SubscriptionPageLayout = (props: Props) => {
    return (
        <div><Outlet /></div>
    );
}

export default SubscriptionPageLayout;