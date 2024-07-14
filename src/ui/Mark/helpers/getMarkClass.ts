import Players, { CellSelectedBy } from "../../../types/Players";

const getMarkClass: (player: CellSelectedBy) => string = (player) => {
  if(Players.FirstPlayer === player) {
    return 'x-mark'
  }
  if(Players.SecondPlayer === player) {
    return 'o-mark'
  }
  return ''
}

export default getMarkClass;