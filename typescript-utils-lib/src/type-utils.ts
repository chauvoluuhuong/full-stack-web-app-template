/**
 * Checks if a value is null or undefined
 */
export function isNil(value: any): value is null | undefined {
  return value === null || value === undefined;
}

/**
 * Checks if a value is not null and not undefined
 */
export function isNotNil<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Checks if a value is a string
 */
export function isString(value: any): value is string {
  return typeof value === "string";
}

/**
 * Checks if a value is a number
 */
export function isNumber(value: any): value is number {
  return typeof value === "number" && !isNaN(value);
}

/**
 * Checks if a value is a boolean
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

/**
 * Checks if a value is an array
 */
export function isArray<T = any>(value: any): value is T[] {
  return Array.isArray(value);
}

/**
 * Checks if a value is a plain object
 */
export function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * Checks if a value is a function
 */
export function isFunction(value: any): value is Function {
  return typeof value === "function";
}

/**
 * Checks if a value is a Date object
 */
export function isDate(value: any): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

/**
 * Checks if a value is empty (null, undefined, empty string, empty array, or empty object)
 */
export function isEmpty(value: any): boolean {
  if (isNil(value)) return true;
  if (isString(value) || isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}
