import React, { useContext } from 'react';
import { GameStatusContext } from '../../../contexts';
import struggle from '../../../assets/icons/struggle.png';
import finishFlag from '../../../assets/icons/finish-flag.png';
import GameStatuses from '../../../types/GameStatus';

const GameStatusInfo: React.FC = () => {
  const gameStatus = useContext(GameStatusContext);

  return (
    <div className='game-info__info-block'>
      <p className='game-info__title'>Статус игры:</p>
      <div className='game-info__icon-container'>
        {gameStatus === GameStatuses.Started && <img className='head-icon' src={struggle} alt='trophy'/>}
        {/* {gameStatus === GameStatuses.Paused && <img className='trophy__img' src={struggle} alt='trophy'/>} */}
        {gameStatus === GameStatuses.Finished && <img className='head-icon' src={finishFlag} alt='trophy'/>}
      </div>
      {/* <p>{gameStatus}</p> */}
    </div>
  );
};

export default GameStatusInfo;