import { victoryCases } from "../../../constants/victoryCases";
import GameResults, { CheckDrawType, CheckGameResultType, CheckVictoryType } from "../../../types/GameResult";

const checkVictory: CheckVictoryType = (marks, turn, cellIndex) => {
  for( let victoryCase of victoryCases[cellIndex]) {
    const victory = victoryCase.combination.every(victoryIndex => marks[victoryIndex] === turn);
    const victoryCombinationFull = [...victoryCase.combination, cellIndex]
    if(victory) return {
      combination: victoryCombinationFull,
      orientation: victoryCase.orientation,
    }
  }
  return false
}

const checkDraw: CheckDrawType = (marks, cellIndex) => {
  let draw = true;
  marks.forEach((mark, index) => {
    if(index === cellIndex) return; // Эту клетку пропускаем, т.к. на данном рендере в эту клетку еще не записалось состояние, но мы уже выяснили, что победы или поражения не будет, при выборе этой клетки.
    if(!mark) draw = false;// если все остальные клетки заполнены - значит ничья.
  })
  return draw;
}

const checkGameResult: CheckGameResultType = (marks, turn, cellIndex) => {
  const victory = checkVictory(marks, turn, cellIndex)
  if(victory) return victory;
  const draw = checkDraw(marks, cellIndex);
  if(draw) return GameResults.Draw;
  return GameResults.Continue;
};

export default checkGameResult;





