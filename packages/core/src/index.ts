export type ReadonlyOrNot<T> = T | Readonly<T>;
export type ElementOf<T> = T extends ReadonlyOrNot<(infer U)[]> ? U : never;
export type Map<T, U> = T extends ReadonlyOrNot<any[]> ? { [K in keyof T]: U } : never;

export const TypeSafeArray = {
  map<Container extends ReadonlyOrNot<any[]>, ReturnType>(
    container: Container,
    callbackfn: (value: ElementOf<Container>, index: number, array: Container) => ReturnType
  ): Map<Container, ReturnType> {
    return container.map(callbackfn as any) as Map<Container, ReturnType>;
  },

  forEach<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    callbackfn: (value: ElementOf<Container>, index: number, array: Container) => void
  ): void {
    container.forEach(callbackfn as any);
  },

  filter<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    predicate: (value: ElementOf<Container>, index: number, array: Container) => boolean
  ): ElementOf<Container>[] {
    return container.filter(predicate as any);
  },

  reduce<Container extends ReadonlyOrNot<any[]>, ReturnType>(
    container: Container,
    callbackfn: (
      previousValue: ReturnType,
      currentValue: ElementOf<Container>,
      currentIndex: number,
      array: Container
    ) => ReturnType,
    initialValue: ReturnType
  ): ReturnType {
    return container.reduce(callbackfn as any, initialValue);
  },

  find<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    predicate: (value: ElementOf<Container>, index: number, obj: Container) => boolean
  ): ElementOf<Container> | undefined {
    return container.find(predicate as any);
  },

  findIndex<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    predicate: (value: ElementOf<Container>, index: number, obj: Container) => boolean
  ): number {
    return container.findIndex(predicate as any);
  },

  some<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    predicate: (value: ElementOf<Container>, index: number, array: Container) => boolean
  ): boolean {
    return container.some(predicate as any);
  },

  every<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    predicate: (value: ElementOf<Container>, index: number, array: Container) => boolean
  ): boolean {
    return container.every(predicate as any);
  },

  includes<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    searchElement: ElementOf<Container>,
    fromIndex?: number
  ): boolean {
    return container.includes(searchElement, fromIndex);
  },

  indexOf<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    searchElement: ElementOf<Container>,
    fromIndex?: number
  ): number {
    return container.indexOf(searchElement, fromIndex);
  },

  join<Container extends ReadonlyOrNot<any[]>>(container: Container, separator?: string): string {
    return container.join(separator);
  },

  slice<Container extends ReadonlyOrNot<any[]>>(
    container: Container,
    start?: number,
    end?: number
  ): ElementOf<Container>[] {
    return container.slice(start, end) as ElementOf<Container>[];
  },

  concat<Container extends ReadonlyOrNot<any[]>, Item>(
    container: Container,
    ...items: (Item | ReadonlyOrNot<Item[]>)[]
  ): (ElementOf<Container> | Item)[] {
    return container.concat(...items) as (ElementOf<Container> | Item)[];
  },
};
