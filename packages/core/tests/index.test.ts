import { describe, it, expect } from 'vitest';
import { TypeSafeArray } from '../src/index';

describe('TypeSafeArray', () => {
  describe('map', () => {
    it('should transform each element of the array', () => {
      const input = [1, 2, 3] as const;
      const result = TypeSafeArray.map(input, (x) => x * 2);
      expect(result).toEqual([2, 4, 6]);
    });
  });

  describe('forEach', () => {
    it('should iterate over each element of the array', () => {
      const input = [1, 2, 3] as const;
      const result: number[] = [];
      TypeSafeArray.forEach(input, (x) => result.push(x * 2));
      expect(result).toEqual([2, 4, 6]);
    });
  });

  describe('filter', () => {
    it('should filter elements based on the predicate', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.filter(input, (x) => x % 2 === 0);
      expect(result).toEqual([2, 4]);
    });
  });

  describe('reduce', () => {
    it('should reduce the array to a single value', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.reduce(input, (acc, curr) => acc + curr, 0);
      expect(result).toBe(15);
    });
  });

  describe('find', () => {
    it('should find the first element that satisfies the predicate', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.find(input, (x) => x > 3);
      expect(result).toBe(4);
    });

    it('should return undefined if no element satisfies the predicate', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.find(input, (x) => x > 10);
      expect(result).toBeUndefined();
    });
  });

  describe('findIndex', () => {
    it('should find the index of the first element that satisfies the predicate', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.findIndex(input, (x) => x > 3);
      expect(result).toBe(3);
    });

    it('should return -1 if no element satisfies the predicate', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.findIndex(input, (x) => x > 10);
      expect(result).toBe(-1);
    });
  });

  describe('some', () => {
    it('should return true if any element satisfies the predicate', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.some(input, (x) => x > 3);
      expect(result).toBe(true);
    });

    it('should return false if no element satisfies the predicate', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.some(input, (x) => x > 10);
      expect(result).toBe(false);
    });
  });

  describe('every', () => {
    it('should return true if all elements satisfy the predicate', () => {
      const input = [2, 4, 6, 8] as const;
      const result = TypeSafeArray.every(input, (x) => x % 2 === 0);
      expect(result).toBe(true);
    });

    it('should return false if any element does not satisfy the predicate', () => {
      const input = [2, 4, 5, 8] as const;
      const result = TypeSafeArray.every(input, (x) => x % 2 === 0);
      expect(result).toBe(false);
    });
  });

  describe('includes', () => {
    it('should return true if the array includes the search element', () => {
      const input = [1, 2, 3, 4, 5];
      const result = TypeSafeArray.includes(input, 3);
      expect(result).toBe(true);
    });

    it('should return false if the array does not include the search element', () => {
      const input = [1, 2, 3, 4, 5];
      const result = TypeSafeArray.includes(input, 6);
      expect(result).toBe(false);
    });
  });

  describe('indexOf', () => {
    it('should return the index of the first occurrence of the search element', () => {
      const input = [1, 2, 3, 4, 3, 5];
      const result = TypeSafeArray.indexOf(input, 3);
      expect(result).toBe(2);
    });

    it('should return -1 if the search element is not found', () => {
      const input = [1, 2, 3, 4, 5];
      const result = TypeSafeArray.indexOf(input, 6);
      expect(result).toBe(-1);
    });
  });

  describe('join', () => {
    it('should join array elements into a string', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.join(input, '-');
      expect(result).toBe('1-2-3-4-5');
    });
  });

  describe('slice', () => {
    it('should return a portion of the array', () => {
      const input = [1, 2, 3, 4, 5] as const;
      const result = TypeSafeArray.slice(input, 1, 4);
      expect(result).toEqual([2, 3, 4]);
    });
  });

  describe('concat', () => {
    it('should concatenate arrays', () => {
      const input = [1, 2, 3] as const;
      const result = TypeSafeArray.concat(input, [4, 5], 6, [7, 8]);
      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });
});
