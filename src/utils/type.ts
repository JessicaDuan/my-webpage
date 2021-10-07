/* eslint-disable no-undef */

/**
 * 判断是否为开发环境
 */
export function isDev() {
  return process.env.NODE_ENV === 'development';
}

/**
 * 判断是否为undefined
 * @param value
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

/**
 * 判断是否为null
 * @param value
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * 是否为数组
 * @param value
 */
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

/**
 * 是否为空
 * @param value
 */
export function isNone(value: unknown): value is null | undefined {
  return isUndefined(value) || isNull(value);
}

/**
 * 是否为对象
 * @param value
 */
export function isRecord(value: unknown): value is Record<string, any> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否为方法
 * @param value
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * 是否为字符串
 * @param value
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * 是否为数字
 * @param value
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

/**
 * 是否为布尔值
 * @param value
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * 广义的变量为空判定(undefined, null, 空字符串，空数组，空对象)
 * @param value
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isEmpty(value: unknown): value is null | undefined | '' | [] {
  if (isNone(value)) {
    return true;
  }
  if (value === '') {
    return true;
  }
  if (isArray(value)) {
    return value.length === 0;
  }
  if (isRecord(value)) {
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * 将值转换为字符串
 * @param value
 */
export function toString(value: unknown) {
  if (isNone(value)) {
    return '';
  }
  if (isRecord(value)) {
    let string = '';
    try {
      string = JSON.stringify(value);
    } catch {
      string = String(value);
    }
    return string;
  }
  return String(value);
}

/**
 * 将值转换为布尔值
 * @param value
 */
export function toBoolean(value: unknown) {
  return Boolean(value);
}

/**
 *  将值转化为数字
 * @param value
 */
export function toNumber(value: unknown) {
  return Number(value) || 0;
}
