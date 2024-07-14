import React from 'react';
import getMarkClass from '../helpers/getMarkClass';
import { CellSelectedBy } from '../../../types/Players';
import getPlayerMark from '../../../models/getPlayerMark';

interface IMark {
  player: CellSelectedBy,
}

const Mark:React.FC<IMark> = ({player}) => {
  const markClassName = getMarkClass(player);
  const mark = getPlayerMark(player);

  return (
    <span className={markClassName}>
      {mark}
    </span>
  );
};

export default Mark;