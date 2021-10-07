const FIXED_GO_CHESS_CONFIGS = {
  ROW_COUNT: 19,
  COL_COUNT: 19,
  DOT_POSITIONS: [
    [3, 3],
    [3, 9],
    [3, 15],
    [9, 3],
    [9, 9],
    [9, 15],
    [15, 3],
    [15, 9],
    [15, 15],
  ],
};

export default {
  ...FIXED_GO_CHESS_CONFIGS,

  GRID_SIZE: 32,
  GRID_PADDING: 32,
  LINE_WIDTH: 1,
  DOT_RADIUS: 4,
  CHESS_RADIUS: 12,
  LINE_COLOR: '#666',
  BOARD_COLOR: '#f9e6ca',
  BLACK_COLOR: '#333',
  WHILE_COLOR: '#fff',
};
