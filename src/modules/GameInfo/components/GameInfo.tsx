import React, { useContext } from 'react';
import '../../../assets/game-info.scss';
import { CurrentTurnContext, GameStatusContext } from '../../../contexts';
import GameResultInfo from './GameResultInfo';
import Mark from '../../../ui/Mark/components/Mark';
import GameStatusInfo from './GameStatusInfo';

const GameInfo: React.FC = () => {
  const turn = useContext(CurrentTurnContext);
  return (
    <div className='game-info'>
      {/* <div className='game-info__info-block'><p className='game-info__title'>Текущий ход:</p> <p className={markClassName}>{mark}</p></div> */}
      <div className='game-info__info-block'>
        <p className='game-info__title'>Текущий ход:</p>
        <Mark player={turn}/>
      </div>
      <GameResultInfo />
      <GameStatusInfo />
    </div>
  )
};

export default GameInfo;