interface MethodProps {
  name: string;
  signature: string;
  description: string;
  params: { name: string; description: string }[];
  returnValue: string;
  example: string;
}

export const methodsData: MethodProps[] = [
  {
    name: 'map',
    signature: `static map<Container extends ReadonlyOrNot<any[]>, ReturnType>(
  container: Container,
  callbackfn: (value: ElementOf<Container>, index: number, array: Container) => ReturnType
): Map<Container, ReturnType>`,
    description:
      'Creates a new array with the results of calling a provided function on every element in this array.',
    params: [
      { name: 'container', description: 'The source array' },
      {
        name: 'callbackfn',
        description:
          'A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.',
      },
    ],
    returnValue: 'A new array with each element being the result of the callback function.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst doubled = TypeSafeArray.map(numbers, x => x * 2);\n// Result: [2, 4, 6, 8, 10]',
  },
  {
    name: 'forEach',
    signature: `static forEach<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  callbackfn: (value: ElementOf<Container>, index: number, array: Container) => void
): void`,
    description: 'Executes a provided function once for each array element.',
    params: [
      { name: 'container', description: 'The array to iterate over' },
      { name: 'callbackfn', description: 'A function to execute for each element in the array' },
    ],
    returnValue: 'undefined',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nTypeSafeArray.forEach(numbers, x => console.log(x));\n// Logs 1, 2, 3, 4, 5 to the console in order',
  },
  {
    name: 'filter',
    signature: `static filter<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  predicate: (value: ElementOf<Container>, index: number, array: Container) => boolean
): ElementOf<Container>[]`,
    description:
      'Creates a new array with all elements that pass the test implemented by the provided function.',
    params: [
      { name: 'container', description: 'The source array' },
      {
        name: 'predicate',
        description:
          'A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.',
      },
    ],
    returnValue: 'A new array with the elements that pass the test.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst evenNumbers = TypeSafeArray.filter(numbers, x => x % 2 === 0);\n// Result: [2, 4]',
  },
  {
    name: 'reduce',
    signature: `static reduce<Container extends ReadonlyOrNot<any[]>, ReturnType>(
  container: Container,
  callbackfn: (
    previousValue: ReturnType,
    currentValue: ElementOf<Container>,
    currentIndex: number,
    array: Container
  ) => ReturnType,
  initialValue: ReturnType
): ReturnType`,
    description:
      'Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.',
    params: [
      { name: 'container', description: 'The array to reduce' },
      {
        name: 'callbackfn',
        description:
          'A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.',
      },
      {
        name: 'initialValue',
        description: 'A value to use as the first argument to the first call of the callbackfn.',
      },
    ],
    returnValue: 'The value that results from the reduction.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst sum = TypeSafeArray.reduce(numbers, (acc, curr) => acc + curr, 0);\n// Result: 15',
  },
  {
    name: 'find',
    signature: `static find<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  predicate: (value: ElementOf<Container>, index: number, obj: Container) => boolean
): ElementOf<Container> | undefined`,
    description:
      'Returns the value of the first element in the array that satisfies the provided testing function.',
    params: [
      { name: 'container', description: 'The array to search' },
      {
        name: 'predicate',
        description:
          'A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.',
      },
    ],
    returnValue:
      'The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst firstEven = TypeSafeArray.find(numbers, x => x % 2 === 0);\n// Result: 2',
  },
  {
    name: 'findIndex',
    signature: `static findIndex<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  predicate: (value: ElementOf<Container>, index: number, obj: Container) => boolean
): number`,
    description:
      'Returns the index of the first element in the array that satisfies the provided testing function.',
    params: [
      { name: 'container', description: 'The array to search' },
      {
        name: 'predicate',
        description:
          'A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.',
      },
    ],
    returnValue: 'The index of the first element in the array that passes the test. Otherwise, -1.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst indexOfFirstEven = TypeSafeArray.findIndex(numbers, x => x % 2 === 0);\n// Result: 1',
  },
  {
    name: 'some',
    signature: `static some<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  predicate: (value: ElementOf<Container>, index: number, array: Container) => boolean
): boolean`,
    description:
      'Tests whether at least one element in the array passes the test implemented by the provided function.',
    params: [
      { name: 'container', description: 'The array to test' },
      { name: 'predicate', description: 'A function to test for each element.' },
    ],
    returnValue:
      'true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst hasEven = TypeSafeArray.some(numbers, x => x % 2 === 0);\n// Result: true',
  },
  {
    name: 'every',
    signature: `static every<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  predicate: (value: ElementOf<Container>, index: number, array: Container) => boolean
): boolean`,
    description:
      'Tests whether all elements in the array pass the test implemented by the provided function.',
    params: [
      { name: 'container', description: 'The array to test' },
      { name: 'predicate', description: 'A function to test for each element.' },
    ],
    returnValue:
      'true if the callback function returns a truthy value for every array element. Otherwise, false.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst allPositive = TypeSafeArray.every(numbers, x => x > 0);\n// Result: true',
  },
  {
    name: 'includes',
    signature: `static includes<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  searchElement: ElementOf<Container>,
  fromIndex?: number
): boolean`,
    description: 'Determines whether an array includes a certain value among its entries.',
    params: [
      { name: 'container', description: 'The array to search' },
      { name: 'searchElement', description: 'The value to search for' },
      {
        name: 'fromIndex',
        description: 'The position in this array at which to begin searching for searchElement.',
      },
    ],
    returnValue: 'true if the searchElement is found in the array, false otherwise.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst includesThree = TypeSafeArray.includes(numbers, 3);\n// Result: true',
  },
  {
    name: 'indexOf',
    signature: `static indexOf<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  searchElement: ElementOf<Container>,
  fromIndex?: number
): number`,
    description: 'Returns the first index at which a given element can be found in the array.',
    params: [
      { name: 'container', description: 'The array to search' },
      { name: 'searchElement', description: 'Element to locate in the array' },
      { name: 'fromIndex', description: 'The index to start the search at.' },
    ],
    returnValue: 'The first index of the element in the array; -1 if not found.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst indexOfThree = TypeSafeArray.indexOf(numbers, 3);\n// Result: 2',
  },
  {
    name: 'join',
    signature: `static join<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  separator?: string
): string`,
    description: 'Joins all elements of an array into a string.',
    params: [
      { name: 'container', description: 'The array to join' },
      {
        name: 'separator',
        description:
          'A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.',
      },
    ],
    returnValue: 'A string with all array elements joined.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst joined = TypeSafeArray.join(numbers, \'-\');\n// Result: "1-2-3-4-5"',
  },
  {
    name: 'slice',
    signature: `static slice<Container extends ReadonlyOrNot<any[]>>(
  container: Container,
  start?: number,
  end?: number
): ElementOf<Container>[]`,
    description: 'Returns a shallow copy of a portion of an array into a new array object.',
    params: [
      { name: 'container', description: 'The array to slice' },
      { name: 'start', description: 'The beginning index of the specified portion of the array.' },
      {
        name: 'end',
        description:
          "The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.",
      },
    ],
    returnValue: 'A new array containing the extracted elements.',
    example:
      'const numbers = [1, 2, 3, 4, 5] as const;\nconst sliced = TypeSafeArray.slice(numbers, 1, 4);\n// Result: [2, 3, 4]',
  },
  {
    name: 'concat',
    signature: `static concat<Container extends ReadonlyOrNot<any[]>, Item>(
  container: Container,
  ...items: (Item | ReadonlyOrNot<Item[]>)[]
): (ElementOf<Container> | Item)[]`,
    description: 'Merges two or more arrays.',
    params: [
      { name: 'container', description: 'The target array' },
      {
        name: 'items',
        description: 'Additional arrays and/or values to concatenate into the new array.',
      },
    ],
    returnValue: 'A new array instance.',
    example:
      'const numbers1 = [1, 2, 3] as const;\nconst numbers2 = [4, 5] as const;\nconst concatenated = TypeSafeArray.concat(numbers1, numbers2, 6);\n// Result: [1, 2, 3, 4, 5, 6]',
  },
];
