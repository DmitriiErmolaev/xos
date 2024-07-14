export enum VictoryOrientations {
  Gorizontal = 'horizontal',
  DiagonalBottomLeft = 'diagonal-bottom-left',
  DiagonalTopLeft = 'diagonal-top-left',
  Vertical = 'vertical',
}

export interface IVictoryCase {
  combination: number[],
  orientation: VictoryOrientations,
}

interface IVictoryCases {
  [index: string]: IVictoryCase[],
}

export const victoryCases: IVictoryCases  = {
  0:[
      {
        combination: [1,2],
        orientation: VictoryOrientations.Gorizontal,
      },
      {
        combination: [3,6],
        orientation: VictoryOrientations.Vertical,
      },
      {
        combination: [4,8],
        orientation: VictoryOrientations.DiagonalTopLeft,
      },
    ],
  1: [
    {
      combination: [0,2],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [4,7],
      orientation: VictoryOrientations.Vertical,
    },
  ],
  2: [
    {
      combination: [0,1],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [4,6],
      orientation: VictoryOrientations.DiagonalBottomLeft,
    },
    {
      combination: [5,8],
      orientation: VictoryOrientations.Vertical,
    },
  ],
  3: [
    {
      combination: [4,5],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [0,6],
      orientation: VictoryOrientations.Vertical,
    },
  ],
  4: [
    {
      combination: [3,5],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [0,8],
      orientation: VictoryOrientations.DiagonalTopLeft,
    },
    {
      combination: [2,6],
      orientation: VictoryOrientations.DiagonalBottomLeft,
    },
    {
      combination: [1,7],
      orientation: VictoryOrientations.Vertical,
    },
  ],
  5: [
    {
      combination: [3,4],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [2,8],
      orientation: VictoryOrientations.Vertical,
    },
  ],
  6: [
    {
      combination: [7,8],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [2,4],
      orientation: VictoryOrientations.DiagonalBottomLeft,
    },
    {
      combination: [0,3],
      orientation: VictoryOrientations.Vertical,
    },
  ],
  7: [
    {
      combination: [6,8],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [1,4],
      orientation: VictoryOrientations.Vertical,
    },
  ],
  8: [
    {
      combination: [6,7],
      orientation: VictoryOrientations.Gorizontal,
    },
    {
      combination: [0,4],
      orientation: VictoryOrientations.DiagonalTopLeft,
    },
    {
      combination: [2,5],
      orientation: VictoryOrientations.Vertical,
    },
  ],
}