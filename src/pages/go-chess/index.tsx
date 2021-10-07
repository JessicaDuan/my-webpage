import React from 'react';
import { Radio, Form } from 'antd';
import Board from './components/Board';
import CONFIG from './config';
import styles from './index.module.less';
import { GoChessMode, useGoChess } from './useGoChess';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const CHESS_LIST = [
  {
    title: '黑子',
    color: CONFIG.BLACK_COLOR,
  },
  {
    title: '白子',
    color: CONFIG.WHILE_COLOR,
  },
];

const GoChessPage = () => {
  const { color, setColor, mode, setMode, add, remove, reset, history, log } = useGoChess();

  return (
    <div className={styles['go-chess-page']}>
      <div className={styles.title}>
        <h3>Go Test</h3>
        <a onClick={reset}>重置</a>
      </div>
      <div className={styles['board-container']}>
        <Board color={color} add={add} remove={remove} history={history} />

        <div className={styles['board-actions']}>
          <div>
            <FormItem label="选择模式">
              <RadioGroup value={mode} onChange={(e) => setMode(e.target.value)}>
                <Radio value={GoChessMode.NORMAL}>对弈</Radio>
                <Radio value={GoChessMode.FREE}>摆子</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="当前回合">
              <RadioGroup value={color} onChange={(e) => setColor(e.target.value)}>
                {CHESS_LIST.map((o) => (
                  <Radio key={o.color} value={o.color}>
                    {o.title}
                  </Radio>
                ))}
              </RadioGroup>
            </FormItem>
          </div>

          <div className={styles['go-chess-logs']}>
            {log.map((o, idx) => (
              <div key={String(idx)}>{o.detail}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoChessPage;
