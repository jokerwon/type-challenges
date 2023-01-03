type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in K]: T[Key]
} & Pick<T, Exclude<keyof T, K>>
