import React, { createContext, useContext, useState } from 'react';
import moment from 'moment';

type SudokuContextProps = {
  numberSelected: string,
  setNumberSelected: React.Dispatch<React.SetStateAction<string>>,
  gameArray: string[],
  setGameArray: React.Dispatch<React.SetStateAction<string[]>>,
  difficulty: string,
  setDifficulty: React.Dispatch<React.SetStateAction<string>>,
  timeGameStarted: moment.Moment,
  setTimeGameStarted: React.Dispatch<React.SetStateAction<moment.Moment>>,
  fastMode: boolean,
  setFastMode: React.Dispatch<React.SetStateAction<boolean>>,
  cellSelected: number,
  setCellSelected: React.Dispatch<React.SetStateAction<number>>,
  initArray: string[],
  setInitArray: React.Dispatch<React.SetStateAction<string[]>>,
  won: boolean,
  setWon: React.Dispatch<React.SetStateAction<boolean>>,
  paused: boolean,
  setPaused: React.Dispatch<React.SetStateAction<boolean>>,
  countTimer:number
  setCountTimer: React.Dispatch<React.SetStateAction<number>>,
  countMistakes:number,
  setCountMistakes: React.Dispatch<React.SetStateAction<number>>,
  countHint:number,
  setCountHint: React.Dispatch<React.SetStateAction<number>>,
};


const SudokuContext = createContext<SudokuContextProps>({ numberSelected: '0', setNumberSelected: () => {},
                                                          gameArray: [], setGameArray: () => {},
                                                          difficulty: 'Easy', setDifficulty: () => {},
                                                          timeGameStarted: moment(), setTimeGameStarted: () => {},
                                                          fastMode: false, setFastMode: () => {},
                                                          cellSelected: -1, setCellSelected: () => {},
                                                          initArray: [], setInitArray: () => {},
                                                          won: false, setWon: () => {}, 
                                                          paused:false,setPaused:()=>{},
                                                          countTimer:0,setCountTimer:()=>{},
                                                          countMistakes:0,setCountMistakes:()=>{},
                                                          countHint:0,setCountHint:()=>{}
                                                        
                                                        });

type SudokuProviderProps = {
  children: React.ReactElement
};

export const SudokuProvider = ({ children }: SudokuProviderProps) => {
  let [ numberSelected, setNumberSelected ] = useState<string>('0');
  let [ gameArray, setGameArray ] = useState<string[]>([]);
  let [ difficulty,setDifficulty ] = useState<string>('Easy');
  let [ timeGameStarted, setTimeGameStarted ] = useState<moment.Moment>(moment());
  let [ fastMode, setFastMode ] = useState<boolean>(false);
  let [ cellSelected, setCellSelected ] = useState<number>(-1);
  let [ initArray, setInitArray ] = useState<string[]>([]);
  let [ countTimer, setCountTimer ] = useState<number>(0);
  let [ countMistakes, setCountMistakes ] = useState<number>(0);
  let [ countHint, setCountHint ] = useState<number>(0);
  let [ won, setWon ] = useState<boolean>(false);
  let [ paused, setPaused ] = useState<boolean>(false);

  return (
    <SudokuContext.Provider value={
      {
        numberSelected, setNumberSelected,
        gameArray, setGameArray,
        difficulty,setDifficulty,
        timeGameStarted, setTimeGameStarted,
        fastMode, setFastMode,
        cellSelected, setCellSelected,
        initArray, setInitArray,
        won, setWon,
        paused,setPaused,
        countTimer,setCountTimer,
        countMistakes,setCountMistakes,
        countHint,setCountHint

      }
    }>
      {children}
    </SudokuContext.Provider>
  );
};

export const useSudokuContext = (): SudokuContextProps => useContext(SudokuContext);

// Usage
// const { numberSelected, setNumberSelected } = useNumberValue();
