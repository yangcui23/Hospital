import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AuthContextProvide} from './context/AuthContext'
import { InfoContextProvider } from './context/InfoContext';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvide>
      <InfoContextProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>
      </InfoContextProvider>

    </AuthContextProvide>
  </React.StrictMode>
);



