import React, { useContext } from 'react';
import PlaygroundCell from './PlaygroundCell';
import { CellSelectedBy } from '../../../types/Players';
import { GameResultContext, VictoryCaseContext } from '../../../contexts';
import GameResults from '../../../types/GameResult';

interface IPlayerCells {
  marks: CellSelectedBy[],
}

const PlaygroundCells: React.FC<IPlayerCells> = ({marks}) => {
  const victoryCase = useContext(VictoryCaseContext);
  const gameResult = useContext(GameResultContext);

  const cells = marks.map((player, index) => {
    const crossedOut = (victoryCase?.combination.includes(index) && gameResult === GameResults.Victory) ? victoryCase.orientation : undefined;
    return <PlaygroundCell key={index} index={index} player={player} crossedOut={crossedOut}/>
  })

  return <>{cells}</>
}




export default PlaygroundCells;