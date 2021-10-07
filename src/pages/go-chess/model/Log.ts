import Chess from './Chess';

export enum GoChessLogAction {
  ADD = 'add',
  REMOVE = 'remove',
}

class GoChessLog {
  action: GoChessLogAction;

  chess: Chess;

  constructor(action: GoChessLogAction, chess: Chess) {
    this.action = action;
    this.chess = chess;
  }

  get detail() {
    switch (this.action) {
      case GoChessLogAction.ADD:
        return `添加`;
      case GoChessLogAction.REMOVE:
        return `移除`;
      default:
        return `异常Action：${this.action}`;
    }
  }
}

export default GoChessLog;
