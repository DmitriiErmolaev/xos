import React, { useContext } from 'react';
import Mark from '../../../ui/Mark/components/Mark';
import '../../../assets/playground-cell.scss';
import { CellSelectedBy } from '../../../types/Players';
import { FunctionsContext } from '../../../contexts';
import { VictoryOrientations } from '../../../constants/victoryCases';

interface IPlaygroundCell {
  player: CellSelectedBy,
  index: number,
  crossedOut?: VictoryOrientations,
}

const PlaygroundCell: React.FC<IPlaygroundCell> = ({player, index, crossedOut}) => {
  const functions = useContext(FunctionsContext);

  const handleCellClick: React.MouseEventHandler<HTMLDivElement> = () => {
    functions?.selectCell(player, index);
  }

  return (
    <div className={`playground__cell ${crossedOut ? crossedOut : ''}`} onClick={handleCellClick}>
      <Mark player={player} />
    </div>
  );
};

export default PlaygroundCell;