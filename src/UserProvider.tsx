import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import { UserProviderContext } from './contexts';
import { IUserContext } from './types/Contexts';

interface IUserProvider {
  children: React.ReactElement;
}

const UserProvider:React.FC<IUserProvider> = ({children}) => {
  const [user, loading, error] = useAuthState(auth);

  const userContext: IUserContext = {user, loading, error}

  return (
    <UserProviderContext.Provider value={userContext}>
      <div>
        {children}
      </div>
    </UserProviderContext.Provider>
  );
};

export default UserProvider;