// 布尔
let bool: boolean = false

//数值
let num: number = 0

// 字符串
let word: string = 'asd'

let item: string = `this is the ${word}`
console.log(item);

// 数组
let arr: number[] = [1, 2, 5]
let arr2: Array<any>
let arr3: (string | number | boolean)[]

// 元祖
let tuple: [string, number, boolean]

tuple = ['a', 123, true]


// 枚举类型
enum Roles {
  SUPER_ADMIN,
  ADMIN,
  USER
}

console.log(Roles.ADMIN);
console.log(Roles[2]);

// any 类型
let value: any
value = 123

value = 'as123'

// void 类型 - 没有类型

const consoleText = (text: string): void => console.log(text);
consoleText('123123')

//null 和 undefined
let u: undefined
let n: null

// never 类型 永远不存在的类型
const errorFunc = (message: string): never => {
  throw new Error(message)
}
const infinite = (): never => {
  while (true) {

  }
}

// 类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (<string>target).length === 0) {
    return (<string>target).length
  }
  else {
    return target.toString().length
  }
}