import { User } from "firebase/auth";
import SelectCellType from "./SelectCellType";

export interface IFunctions {
  selectCell: SelectCellType;
}

export interface IUserContext {
  user: User | null | undefined,
  loading: boolean,
  error: Error | undefined,
}