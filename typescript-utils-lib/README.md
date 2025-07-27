# TypeScript Utils Package

Some utility, helper functions that i usually use.

## Installation

```bash
npm install typescript-utils-package
```

## Usage

### ESM (ES Modules)

```typescript
import { capitalize, unique, deepClone } from "typescript-utils-package";
```

### CommonJS

```javascript
const { capitalize, unique, deepClone } = require("typescript-utils-package");
```

## API Reference

### String Utils

#### `capitalize(str: string): string`

Capitalizes the first letter of a string.

```typescript
capitalize("hello world"); // 'Hello world'
```

#### `toCamelCase(str: string): string`

Converts a string to camelCase.

```typescript
toCamelCase("hello world"); // 'helloWorld'
```

#### `toKebabCase(str: string): string`

Converts a string to kebab-case.

```typescript
toKebabCase("helloWorld"); // 'hello-world'
```

#### `toSnakeCase(str: string): string`

Converts a string to snake_case.

```typescript
toSnakeCase("helloWorld"); // 'hello_world'
```

#### `truncate(str: string, length: number, suffix?: string): string`

Truncates a string to a specified length.

```typescript
truncate("hello world", 5); // 'he...'
truncate("hello world", 5, "---"); // 'he---'
```

### Array Utils

#### `unique<T>(array: T[]): T[]`

Removes duplicate values from an array.

```typescript
unique([1, 2, 2, 3]); // [1, 2, 3]
```

#### `chunk<T>(array: T[], size: number): T[][]`

Chunks an array into smaller arrays of specified size.

```typescript
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

#### `groupBy<T, K>(array: T[], keyFn: (item: T) => K): Record<K, T[]>`

Groups array elements by a key function.

```typescript
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];
groupBy(people, (person) => person.age); // { 30: [...], 25: [...] }
```

### Object Utils

#### `deepClone<T>(obj: T): T`

Deep clones an object.

```typescript
const cloned = deepClone({ a: { b: 1 } });
```

#### `deepMerge<T>(...objects: Partial<T>[]): T`

Deep merges multiple objects.

```typescript
deepMerge({ a: 1 }, { b: 2 }, { a: 3 }); // { a: 3, b: 2 }
```

#### `pick<T, K>(obj: T, keys: K[]): Pick<T, K>`

Picks specified properties from an object.

```typescript
pick({ a: 1, b: 2, c: 3 }, ["a", "c"]); // { a: 1, c: 3 }
```

### Number Utils

#### `clamp(value: number, min: number, max: number): number`

Clamps a number between min and max values.

```typescript
clamp(10, 0, 5); // 5
```

#### `round(value: number, decimals?: number): number`

Rounds a number to specified decimal places.

```typescript
round(3.14159, 2); // 3.14
```

#### `randomBetween(min: number, max: number): number`

Generates a random number between min and max.

```typescript
randomBetween(1, 10); // Random number between 1 and 10
```

### Type Utils

#### `isNil(value: any): value is null | undefined`

Checks if a value is null or undefined.

```typescript
isNil(null); // true
isNil(undefined); // true
isNil(0); // false
```

#### `isEmpty(value: any): boolean`

Checks if a value is empty.

```typescript
isEmpty([]); // true
isEmpty({}); // true
isEmpty(""); // true
isEmpty("hello"); // false
```

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

### Lint

```bash
npm run lint
```

## License

MIT
