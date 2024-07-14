import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.scss';
import { RouterProvider } from 'react-router-dom';
import Game from './pages/Game/components/Game';
import routes from './router/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
    {/* <Game /> */}
  </React.StrictMode>
);