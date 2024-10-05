import React, { useContext } from 'react';
import { UserProviderContext } from '../contexts';
import Spinner from '../ui/Spinner/components/Spinner';
import ErrorPage from '../pages/ErrorPage/components/ErrorPage';
import { useNavigate } from 'react-router-dom';

const AppRouter = () => {
  const userContext = useContext(UserProviderContext)
  const navigate = useNavigate();

  if(userContext?.loading) {
    return <Spinner />
  }

  if(userContext?.error) {
    // return 'Попасть в обработчик ошибок'
  }

  if(!userContext?.user) {

  }

  return (
    <div>

    </div>
  );
};

export default AppRouter;