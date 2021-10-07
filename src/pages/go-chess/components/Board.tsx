import React, { FC, memo, useCallback, useEffect, useRef } from 'react';
import { BOARD_HEIGHT, BOARD_WIDTH, drawChess, drawChessPreview, getPosInBoard, initBoard } from '../utils';
import styles from '../index.module.less';
import Chess from '../model/Chess';

interface BoardProps {
  color: string;
  add: (x: number, y: number) => void;
  remove: (x: number, y: number) => void;
  history: Chess[];
}

const Board: FC<BoardProps> = ({ color, history, add, remove }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (ctx) {
      initBoard(ctx);
    }
  }, []);

  const onLeftClick = useCallback(
    (x: number, y: number) => {
      add(x, y);
    },
    [add]
  );

  const onRightClick = useCallback(
    (x: number, y: number) => {
      remove(x, y);
    },
    [remove]
  );

  const paintCurrent = useCallback(() => {
    const ctx = ref.current?.getContext('2d');
    if (ctx) {
      initBoard(ctx);
      history.forEach((chess) => {
        drawChess(ctx, chess.x, chess.y, chess.color);
      });
    }
  }, [history]);

  useEffect(() => {
    paintCurrent();
  }, [paintCurrent]);

  const onClick = useCallback(
    (e) => {
      const canvas = ref.current;
      if (canvas) {
        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;
        const [posX, posY] = getPosInBoard(x, y);
        if (e.button === 0) {
          onLeftClick(posX, posY);
        } else if (e.button === 2) {
          onRightClick(posX, posY);
        }
      }
    },
    [onLeftClick, onRightClick]
  );

  const onContextMenu = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onHover = useCallback(
    (e) => {
      paintCurrent();
      const canvas = ref.current;
      if (canvas) {
        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;
        const [posX, posY] = getPosInBoard(x, y);
        const ctx = canvas.getContext('2d');
        if (ctx) {
          drawChessPreview(ctx, posX, posY, color);
        }
      }
    },
    [color, paintCurrent]
  );

  return (
    <canvas
      ref={ref}
      className={styles.board}
      width={BOARD_WIDTH}
      height={BOARD_HEIGHT}
      onMouseMove={onHover}
      onMouseUp={onClick}
      onContextMenu={onContextMenu}
    />
  );
};

export default memo(Board);
