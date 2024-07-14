import React from 'react';
import '../../../assets/head.scss';

import GameInfo from '../../../modules/GameInfo/components/GameInfo';

const Head:React.FC = () => {


  return (
    <div className='head'>
      <GameInfo />
    </div>
  );
};

export default Head;
