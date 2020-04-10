// Symbol 独一无二

// const s = Symbol()

// console.log(s);

// const s2 = Symbol()
// console.log(s2);

// const s3 = Symbol('chen')
// console.log(s3);

// console.log(s3.toString())
// console.log(Boolean(s3));
// console.log(!s3);

let prop = 'Name'
const info = {
  [`my ${prop} is`]: 'chen'
}

console.log(info);

const s5 = Symbol('Name')
const info_2 = {
  [s5]: 'chenchen',
  age: 18,
  gender: 'male'
}
// console.log(info_2);

info_2[s5] = 'hello'
for (const key in info_2) {
  // console.log(key);
}
// console.log(Object.keys(info_2))
// console.log(Object.getOwnPropertyNames(info_2))

// console.log(JSON.stringify(info_2))
// console.log(Object.getOwnPropertySymbols(info_2))
// console.log(Reflect.ownKeys(info_2))

//Symbol.for .keyFor()
const s8 = Symbol.for('chen')
// const s9 = Symbol.for('chen')
// const s10 = Symbol.for('den')
// 前两个相等，后两个不等

// 只能返回Symbol.for() 注册的全局标识
// console.log(Symbol.keyFor(s8))
// console.log(Symbol.keyFor(s5))

// 取消扁平化
// let the_arr: any = [1, 2]
// let em_arr: Array<number> = []
// console.log(em_arr.concat(the_arr, [3, 4]));

// the_arr[Symbol.isConcatSpreadable] = false
// console.log(em_arr.concat(the_arr, [3, 4]));
// console.log(the_arr[Symbol.isConcatSpreadable])




class C extends Array {
  constructor(...args) {
    super(...args);
  }
  static get [Symbol.species]() {
    return Array
  }
  getName() {
    return 'chen'
  }
}

const c = new C(1, 2, 3);
const a = c.map(item => item + 1)
// console.log(a)
// console.log(a instanceof C);
// console.log(a instanceof Array)


let obj3 = {
  [Symbol.match](string) {
    // console.log(string.length);
  },
  [Symbol.split](string) {
    // console.log('split', string.length);
  }
}
'asdasd'.match(<RegExp>obj3)
'asdasd'.split(<any>obj3)

let obj4: unknown = {
  [Symbol.toPrimitive](type) {
    // console.log(type);
  }
}
const res = `abc${obj4}`

let obj5 = {
  get [Symbol.toStringTag]() {
    return 'chennn'
  }
}
// console.log(obj5.toString());

const obj6 = {
  a: 'a',
  b: 'b'
}
console.log(Array.prototype[Symbol.unscopables]);

