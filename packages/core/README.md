# TypeSafeArray

TypeSafeArray is a type-safe utility library for array manipulation in TypeScript.

## Features

- Full type safety
- Support for readonly arrays
- API similar to standard Array methods

## Installation

```bash
npm install @chapdo/type-safe-array
```

or

```bash
yarn add @chapdo/type-safe-array
```

## Usage

```typescript
import { TypeSafeArray } from 'type-safe-array';

const numbers = [1, 2, 3, 4, 5] as const;

// map example
const doubled = TypeSafeArray.map(numbers, (x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter example
const evenNumbers = TypeSafeArray.filter(numbers, (x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce example
const sum = TypeSafeArray.reduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum); // 15
```

## Official Documentation

Detailed API documentation can be found [here](https://type-safe-array-docs.vercel.app/).

## License

This project is under the [MIT License](LICENSE).
