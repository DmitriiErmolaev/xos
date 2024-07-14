import { IVictoryCase } from './constants/victoryCases';
import { createContext } from "react";
import { CellSelectedBy } from "./types/Players";
import GameStatuses from "./types/GameStatus";
import GameResults from "./types/GameResult";
import { IFunctions, IUserContext } from "./types/Contexts";

export const CurrentTurnContext = createContext<CellSelectedBy>(null)
export const GameStatusContext = createContext<GameStatuses | null>(null)
export const GameResultContext = createContext<GameResults | null>(null)
export const FunctionsContext = createContext<IFunctions | null>(null)
export const VictoryCaseContext = createContext<IVictoryCase | null>(null)
export const UserProviderContext = createContext<IUserContext | null>(null)

