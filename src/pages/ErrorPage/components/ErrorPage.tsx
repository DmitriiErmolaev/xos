import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import '../../../assets/pages/error-page.scss';

const ErrorPage: React.FC = () => {
  const error: any = useRouteError();

  const navigate = useNavigate()

  const handleReload = () => {
    navigate('/');
  }

  return (
    <div className='error-page'>
      <div className='error-container'>
        <div className='error__code'>
          Code
        </div>
        <div className='error__message'>
          {error.message}
        </div>
        <button onClick={handleReload}>На главную</button>
      </div>
    </div>
  );
};

export default ErrorPage;