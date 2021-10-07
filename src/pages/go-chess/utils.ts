import { canvasUtils, getValidNumInRange } from '@/utils';
import CONFIG from './config';

const WIDTH = (CONFIG.COL_COUNT - 1) * CONFIG.GRID_SIZE + CONFIG.LINE_WIDTH;
const HEIGHT = (CONFIG.ROW_COUNT - 1) * CONFIG.GRID_SIZE + CONFIG.LINE_WIDTH;

export const BOARD_WIDTH = WIDTH + CONFIG.GRID_PADDING * 2;
export const BOARD_HEIGHT = HEIGHT + CONFIG.GRID_PADDING * 2;

export function getNextColor(color: string) {
  if (color === CONFIG.BLACK_COLOR) return CONFIG.WHILE_COLOR;
  return CONFIG.BLACK_COLOR;
}

export function initBoard(ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, WIDTH + CONFIG.GRID_PADDING * 2, HEIGHT + CONFIG.GRID_PADDING * 2);

  // draw background
  ctx.fillStyle = CONFIG.BOARD_COLOR;
  ctx.fillRect(0, 0, WIDTH + CONFIG.GRID_PADDING * 2, HEIGHT + CONFIG.GRID_PADDING * 2);

  // draw lines
  ctx.beginPath();
  ctx.lineWidth = CONFIG.LINE_WIDTH;
  ctx.fillStyle = CONFIG.LINE_COLOR;
  for (let i = 0; i < CONFIG.ROW_COUNT; i += 1) {
    ctx.fillRect(CONFIG.GRID_PADDING, CONFIG.GRID_PADDING + i * CONFIG.GRID_SIZE, WIDTH, CONFIG.LINE_WIDTH);
    ctx.fill();
  }
  for (let i = 0; i < CONFIG.COL_COUNT; i += 1) {
    ctx.fillRect(CONFIG.GRID_PADDING + i * CONFIG.GRID_SIZE, CONFIG.GRID_PADDING, CONFIG.LINE_WIDTH, HEIGHT);
    ctx.fill();
  }
  ctx.closePath();

  // draw dots
  CONFIG.DOT_POSITIONS.forEach(([x, y]) => {
    canvasUtils.drawCircle(
      ctx,
      CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE,
      CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE,
      CONFIG.DOT_RADIUS,
      CONFIG.LINE_COLOR
    );
  });
}

export function getPosInBoard(x: number, y: number) {
  const posX = getValidNumInRange(Math.round((x - CONFIG.GRID_PADDING) / CONFIG.GRID_SIZE), [0, CONFIG.COL_COUNT - 1]);
  const posY = getValidNumInRange(Math.round((y - CONFIG.GRID_PADDING) / CONFIG.GRID_SIZE), [0, CONFIG.ROW_COUNT - 1]);
  return [posX, posY];
}

export function drawChess(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
  canvasUtils.drawCircle(
    ctx,
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE,
    CONFIG.CHESS_RADIUS,
    color
  );
}

export function drawChessPreview(ctx: CanvasRenderingContext2D, x: number, y: number, color: string) {
  ctx.globalAlpha = 0.7;

  const borderWidth = 1;
  const previewLineWidth = CONFIG.GRID_SIZE / 3;

  ctx.fillStyle = 'red';
  // left top
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    previewLineWidth,
    borderWidth
  );
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    borderWidth,
    previewLineWidth
  );
  // right top
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    -previewLineWidth,
    borderWidth
  );
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    borderWidth,
    previewLineWidth
  );
  // left bottom
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    previewLineWidth,
    borderWidth
  );
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE - CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    borderWidth,
    -previewLineWidth
  );
  // right bottom
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    -previewLineWidth,
    borderWidth
  );
  ctx.fillRect(
    CONFIG.GRID_PADDING + x * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    CONFIG.GRID_PADDING + y * CONFIG.GRID_SIZE + CONFIG.GRID_SIZE / 2,
    borderWidth,
    -previewLineWidth
  );

  drawChess(ctx, x, y, color);
  ctx.globalAlpha = 1;
}
