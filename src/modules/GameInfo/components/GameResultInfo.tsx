import React, { useContext, useEffect, useRef } from 'react';
import '../../../assets/game-result-info.scss';
import { GameResultContext } from '../../../contexts';
import GameResults from '../../../types/GameResult';
import trophy from '../../../assets/icons/trophy.png';
import draw from '../../../assets/icons/icons8-handshake.png';
interface IResultMessage {
  text: string;
  styleClass: string;
}

interface IResultMessages {
  [index: string] : IResultMessage;
}

const resultMessages: IResultMessages = {
  [GameResults.Victory]: {
    text: 'Победа!',
    styleClass: 'victory',
  },
  [GameResults.Draw] : {
    text: 'Ничья',
    styleClass: 'draw',
  } ,
  [GameResults.Continue] :{
    text: '',
    styleClass: '',
  } ,
}

const GameResultInfo: React.FC = () => {
  const gameResult = useContext(GameResultContext);
  const gameResultRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if(gameResult) {
      console.log(gameResultRef?.current)
      if(resultMessages[gameResult].styleClass) {
        gameResultRef?.current?.classList.add(resultMessages[gameResult].styleClass);
      }
    }
  }, [gameResult])

  return (
    <div className='game-info__info-block'>
      <p className='game-info__title'>Результат:</p>
      <div className='game-info__icon-container'>
        {gameResult === GameResults.Victory && <img className='head-icon' src={trophy} alt='trophy'/>}
        {gameResult === GameResults.Draw && <img className='head-icon' src={draw} alt='draw'/>}
      </div>
      <p ref={gameResultRef} className='announcement'>{gameResult ? resultMessages[gameResult].text : null}</p>
    </div>
  )
};

export default GameResultInfo;