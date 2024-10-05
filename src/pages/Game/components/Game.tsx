import React, { useState } from 'react';
import Playground from '../../../modules/Playground/components/Playground';
import SwitchPlayerType from '../../../types/SwitchPlayerType';
import Players, { CellSelectedBy } from '../../../types/Players';
import { CurrentTurnContext, FunctionsContext, GameResultContext, GameStatusContext, VictoryCaseContext } from '../../../contexts';
import GameStatuses from '../../../types/GameStatus';
import Head from '../../../layout/head/components/GameStatusPanel';
import '../../../assets/game.scss';
import GameResults from '../../../types/GameResult';
import SelectCellType from '../../../types/SelectCellType';
import checkGameResult from '../helpers/checkGameResult';
import { IVictoryCase } from '../../../constants/victoryCases';
import { IFunctions } from '../../../types/Contexts';

const getInitialMarksState: () => null[] = () => {
  return new Array(9).fill(null);
}

// объявить тип для функции switchPlayer т.к. его надо исопльзовать тут, и при передаче в дочерние компоненты в других интерфейсах.
function Game() {
  const [ turn, setTurn ] = useState<Players | null>(null);
  const [ gameStatus, setGameStatus ] = useState<GameStatuses | null>(null);
  const [ gameResult, setGameResult ] = useState<GameResults | null>(null);
  const [ victoryCase, setVictoryCase ] = useState<IVictoryCase | null>(null);
  const [ marks, setMarks ] = useState<CellSelectedBy[]>(getInitialMarksState);

  const startGame: () => void = () => {
    setTurn(Players.FirstPlayer);
    setGameStatus(GameStatuses.Started);
    setGameResult(GameResults.Continue);
    setMarks(getInitialMarksState());
    setVictoryCase(null);
  }

  const finishGame: () => void = () => {
    setTurn(Players.FirstPlayer);
    setGameStatus(GameStatuses.Finished);
    setTurn(null);
  }

   /**
   * Переход хода к следующему игроку
   * @return {void}
   */
   const switchPlayer: SwitchPlayerType = () => {
    setTurn(turn => {
      if(turn === Players.FirstPlayer) {
        return Players.SecondPlayer;
      }
      return Players.FirstPlayer;
    })
  }

  const selectCell: SelectCellType = (selectedPlayer, cellIndex) => {
    if(gameStatus === GameStatuses.Started) {
      // Если клетка уже выбрана - нельзя перевыбрать и сменить ход к следующему игроку.
      if(selectedPlayer) return;
      setMarks(prevState => {
        return prevState.map((mark, index) => {
          if(index === cellIndex) return turn;
          return mark;
        })
      })
      // проверка на победу или завершенность игры.
      const result = checkGameResult(marks, turn, cellIndex);
      if(typeof result === 'object' && result !== null) {
        setVictoryCase(result);
        setGameResult(GameResults.Victory);
        finishGame();
        return;
      }
      if(result === GameResults.Draw) {
        setGameResult(result)
        finishGame();
        return;
      }
      switchPlayer();
    }
  }

  const functionsContext: IFunctions = {
    selectCell,
  }

  return (
    <CurrentTurnContext.Provider value={turn}>
      <GameStatusContext.Provider value={gameStatus}>
        <GameResultContext.Provider value={gameResult}>
          <FunctionsContext.Provider value={functionsContext}>
            <VictoryCaseContext.Provider value={victoryCase}>
              <div className="game">
                <Head />
                <Playground startGame={startGame} marks={marks}/>
                <div className='game-footer'></div>
              </div>
            </VictoryCaseContext.Provider>
          </FunctionsContext.Provider>
        </GameResultContext.Provider>
      </GameStatusContext.Provider>
    </CurrentTurnContext.Provider>
  );
}

export default Game;