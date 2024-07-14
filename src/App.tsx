import React from 'react';
import AppRouter from './router/AppRouter';
import UserProvider from './UserProvider';

const App: React.FC = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  );
};

export default App;