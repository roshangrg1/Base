import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Auth0Provider
    domain="dev-j5jzu2qwgrq6xtmr.us.auth0.com"
    clientId="gPbEjvNYCzf4FbBK4AMHuNKk64UboyQD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  
);


