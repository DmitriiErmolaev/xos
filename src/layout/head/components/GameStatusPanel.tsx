import React, { useContext, useMemo, useRef } from 'react';
import '../../../assets/game-status-panel.scss';
import { CurrentTurnContext, GameResultContext } from '../../../contexts';
import Mark from '../../../ui/Mark/components/Mark';
import GameResultInfo from '../../../modules/GameInfo/components/GameResultInfo';
import GameStatusInfo from '../../../modules/GameInfo/components/GameStatusInfo';
import getGamePanelItems from '../../../modules/GameStatusPanel/models/gameStatusItems';
import GamePanelItem from '../../../components/GamePanelItem';

const GameStatusPanel:React.FC = () => {
  const gameResult = useContext(GameResultContext);
  const gameResultRef = useRef<HTMLParagraphElement | null>(null);
  const turn = useContext(CurrentTurnContext);

  const gamePanelItems = useMemo(() => {
    return getGamePanelItems();
  },[])

  return (
    <div className='game-status-panel'>
      {gamePanelItems.map(item => {
        return <GamePanelItem key={item.key} item={item} />
      })}
      <div className='game-info'>
        {/* <div className='game-info__info-block'><p className='game-info__title'>Текущий ход:</p> <p className={markClassName}>{mark}</p></div> */}
        <div className='game-info__info-block'>
          <p className='game-info__title'>Текущий ход:</p>
          <Mark player={turn}/>
        </div>
        <GameResultInfo />
        <GameStatusInfo />
      </div>
    </div>
  );
};

export default GameStatusPanel;
