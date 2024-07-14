import { IVictoryCase } from "../constants/victoryCases";
import { CellSelectedBy } from "./Players";

enum GameResults {
  Victory = 'victory',
  Draw = 'draw',
  Continue = 'continue'
}

interface IGameResultData {
  winningCellsSet?: number[],
  result: GameResults | null,
}

// export type TypeGetVictoryData = () => ;
export type CheckGameResultType = (marks: CellSelectedBy[], player: CellSelectedBy, cellIndex: number) => GameResults | IVictoryCase;
export type CheckVictoryType = (marks: CellSelectedBy[], player: CellSelectedBy, cellIndex: number) => IVictoryCase | false;
export type CheckDrawType = (marks: CellSelectedBy[], cellIndex: number) => boolean;

export default GameResults;