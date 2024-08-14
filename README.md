# TypeSafeArray

TypeSafeArray는 TypeScript에서 배열 조작을 위한 타입 안전한 유틸리티 라이브러리입니다.

## 특징

- 완전한 타입 안전성
- 읽기 전용 배열 지원
- 표준 Array 메서드와 유사한 API

## 설치

```bash
npm install type-safe-array
```

또는

```bash
yarn add type-safe-array
```

## 사용법

```typescript
import { TypeSafeArray } from 'type-safe-array';

const numbers = [1, 2, 3, 4, 5] as const;

// map 예제
const doubled = TypeSafeArray.map(numbers, (x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter 예제
const evenNumbers = TypeSafeArray.filter(numbers, (x) => x % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce 예제
const sum = TypeSafeArray.reduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum); // 15
```

## 공식문서

자세한 API 문서는 [여기](링크)에서 확인할 수 있습니다.

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 있습니다.
