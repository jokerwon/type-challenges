type If<C extends boolean, T, F> = C extends true ? T : F

// type T2<C extends boolean> = C extends true ? 1 : 2
// type Q5 = T2<boolean> // 1 | 2，extends 左边是联合类型，返回的结果也是联合类型，触发了 distributive
// type Q6 = T2<true> // 1
// type Q7 = T2<false> // 2
