const gamePanelItems = [
  {
    key:'currentTurn',
    label:'Текущий ход',
  },
  {
    key:'gameResult',
    label:'Результат',
  },
  {
    key:'gameStatus',
    label:'Статус игры',
  },
]

export default function getGamePanelItems() {
  return gamePanelItems;
}