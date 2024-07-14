import React, { SyntheticEvent, useContext, useEffect, useRef } from 'react';
import '../../../assets/playground.scss';
import { CellSelectedBy } from '../../../types/Players';
import { GameStatusContext } from '../../../contexts';
import GameStatuses from '../../../types/GameStatus';
import PlaygroundCells from './PlaygroundCells';

interface IPlayground {
  startGame: () => void,
  marks: CellSelectedBy[],
}

const Playground: React.FC<IPlayground> = ({startGame, marks}) => {
  const gameStatus = useContext(GameStatusContext);
  const startGameBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if(!gameStatus || gameStatus === GameStatuses.Finished) {
      startGameBtnRef?.current?.classList.add('play-game-animation');
    }
    if(gameStatus === GameStatuses.Started) {
      startGameBtnRef?.current?.classList.remove('play-game-animation');
    }
  }, [gameStatus])

  const handleButtonMouseOver: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e?.currentTarget?.classList.remove('play-game-animation');
  }
  const handleButtonMouseLeave: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if(gameStatus === GameStatuses.Started) return;
    e?.currentTarget?.classList.add('play-game-animation');
  }
  // useEffect(() => {
  //   startGameBtnRef?.current?.addEventListener('mousemove', handleButtonMouseOver)
  // }, [])

  const handleStartButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e)
    // e.currentTarget.classList.remove('play-game-animation');
    startGame();
  }

  return (
    <div className='playground'>
      <div className='playground__board'>
        <PlaygroundCells marks={marks}/>
      </div>
      <button ref={startGameBtnRef} className={`playground__start-button ${gameStatus === GameStatuses.Started ? 'disabled' : ''}`} disabled={gameStatus === GameStatuses.Started} onClick={handleStartButtonClick} onMouseEnter={handleButtonMouseOver} onMouseLeave={handleButtonMouseLeave}>Play game</button>
    </div>
  );
};

export default Playground;