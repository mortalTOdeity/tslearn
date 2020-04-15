function add(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

const add2 = (arg1: number, arg2: number) => arg1 + arg2;

let add3: (x: number, y: number) => number

add3 = (arg1: number, arg2: number): number => arg1 + arg2;

let addFunction = (x: number, y = 3) => {
  return x + y
}

console.log(addFunction(1));
