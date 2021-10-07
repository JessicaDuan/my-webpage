import { useCallback, useState } from 'react';
import config from './config';
import Chess from './model/Chess';
import GoChessLog, { GoChessLogAction } from './model/Log';
import { getNextColor } from './utils';

export enum GoChessMode {
  NORMAL = 'normal',
  FREE = 'free',
}

export function useGoChess() {
  const [color, setColor] = useState(config.BLACK_COLOR);
  const [mode, setMode] = useState(GoChessMode.NORMAL);
  const [history, setHistory] = useState<Chess[]>([]);
  const [log, setLog] = useState<GoChessLog[]>([]);

  const add = useCallback(
    (x: number, y: number) => {
      if (history.findIndex((o) => o.x === x && o.y === y) > -1) {
        return;
      }

      const chess = new Chess(x, y, color);
      setHistory((prev) => [...prev, chess]);
      setLog((prev) => [...prev, new GoChessLog(GoChessLogAction.ADD, chess)]);
      if (mode === GoChessMode.NORMAL) {
        setColor((prev) => getNextColor(prev));
      }
    },
    [color, history, mode]
  );

  const remove = useCallback(
    (x: number, y: number) => {
      if (mode === GoChessMode.NORMAL) {
        return;
      }

      const chessIdx = history.findIndex((o) => o.x === x && o.y === y);
      if (chessIdx === -1) {
        return;
      }

      const chess = history[chessIdx];
      setHistory((prev) => prev.filter((o, i) => i !== chessIdx));
      setLog((prev) => [...prev, new GoChessLog(GoChessLogAction.REMOVE, chess)]);
    },
    [history, mode]
  );

  const undo = useCallback(() => {
    setHistory((prev) => prev.slice(0, -1));
  }, []);

  const reset = useCallback(() => {
    setHistory([]);
    setLog([]);
  }, []);

  return {
    color,
    setColor,

    mode,
    setMode,

    history,
    log,

    add,
    remove,
    reset,
    undo,
  };
}
