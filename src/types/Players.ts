enum Players {
  FirstPlayer = 'first',
  SecondPlayer = 'second',
}

export enum Marks {
  X = 'X',
  O = 'O',
}

export interface IPlayerMarks {
  [Players.FirstPlayer]: Marks.X,
  [Players.SecondPlayer]: Marks.O,
}

export type CellSelectedBy = Players | null;

export default Players;