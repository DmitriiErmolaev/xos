import React from 'react';
import '../assets/components/game-panel-item.scss';

const GamePanelItem = ({item}) => {



  return (
    <div className='game-panel-item '>
      <p className='game-panel-item__title'>{item.label}</p>
      <div className='game-panel-item__icon-container'>
        {gameResult === GameResults.Victory && <img className='game-panel-item__icon' src={trophy} alt='trophy'/>}
        {gameResult === GameResults.Draw && <img className='game-panel-item__icon' src={draw} alt='draw'/>}
      </div>
      {/* <p ref={gameResultRef} className='game-panel-item__announcemen'>{gameResult ? resultMessages[gameResult].text : null}</p> */}
    </div>
  );
};

export default GamePanelItem;