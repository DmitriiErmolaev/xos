import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.scss';
import Game from './pages/Game/components/Game';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);