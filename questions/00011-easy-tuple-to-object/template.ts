type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [K in T[number]]: K
}

const tuple1 = [2, 'bar', Symbol('')]

type Case1 = typeof tuple1 // (string | number | symbol)[]
type Case2 = TupleToObject<Case1>
// {
//   [x: string]: string;
//   [x: number]: number;
//   [x: symbol]: symbol;
// }
