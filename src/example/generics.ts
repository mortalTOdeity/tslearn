const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}

console.log(getArray<number>(1232, 20).map(item => item.toFixed()))

const getArray2 = <T, U>(param1: T, param2: U, times: number): Array<[T, U]> => {
  return new Array(times).fill([param1, param2])
}
getArray2<number, string>(1, 'a', 3).forEach(item => {
  console.log(item[0]);
  console.log(item[1]);
})
