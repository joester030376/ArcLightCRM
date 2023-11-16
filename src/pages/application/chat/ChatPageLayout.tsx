import React from 'react';
import { Outlet } from 'react-router';

type Props = {};

const ChatPageLayout = (props: Props) => {
    return (
        <div><Outlet /></div>
    );
}

export default ChatPageLayout;