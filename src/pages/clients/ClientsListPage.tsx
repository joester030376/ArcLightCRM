import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ClientsListPage = () => {

  const [clientList, setClientList] = useState([]);

  const clients = axios.get('http://localhost/8080/clients', {
    
  });


  return (
    <div>Clients List Page</div>
  )

}

export default ClientsListPage;