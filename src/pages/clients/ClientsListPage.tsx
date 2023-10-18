import React from 'react';
import { Outlet } from 'react-router';
import BasicCard from '../../components/common/BasicCard';
import Searchbar from '../../components/common/Searchbar';

type Props = {};

const ClientsListPage = () => {
    return (
        <div>
            <BasicCard 
                header={<Searchbar />} 
                content="test"
            />
        </div>
    );
}

export default ClientsListPage;