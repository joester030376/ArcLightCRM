import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <React.StrictMode>
    <Auth0Provider
      domain = {process.env.REACT_APP_DOMAIN}
      clientId = {process.env.REACT_APP_CLIENT_ID}
      authorizationParams={{
        redirect_uri: 'http://localhost:3000/dashboard'
      }}
    >
      <Provider store={store}>
        <CssBaseline />
          <App />
      </Provider>
    </Auth0Provider>,    
  </React.StrictMode>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
