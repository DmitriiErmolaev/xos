import Players from "./Players";

type SelectCellType = (selectedPlayer: Players | null, cellIndex: number) => void;

export default SelectCellType;