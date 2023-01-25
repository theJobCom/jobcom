import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DataStoreContext from './store/ContexApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataStoreContext>
      <App />
    </DataStoreContext>
  </React.StrictMode>
);
