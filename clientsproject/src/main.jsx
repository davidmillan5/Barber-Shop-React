import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { Home } from './Home/Home';
import { Menu } from './shared/Menu/Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu></Menu>
    <Home></Home>
  </React.StrictMode>
);
