// type First<T extends any[]> = T extends [] ? never : T[0]
type First<T extends any[]> = T extends [infer First, ...any] ? First : never

type Case = First<[3, 2, 1]>
