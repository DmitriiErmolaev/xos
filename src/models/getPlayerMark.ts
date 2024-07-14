import Players, { IPlayerMarks, Marks } from "../types/Players"

const marks: IPlayerMarks = {
  [Players.FirstPlayer]: Marks.X,
  [Players.SecondPlayer]: Marks.O,
}

type TypeGetPlayerMark = (player: Players | null) => Marks | null;

const getPlayerMark:TypeGetPlayerMark  = (player) => {
  return player ? marks[player] : null
};

export default getPlayerMark;