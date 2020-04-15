const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}

interface NameInfo {
  firstName: string,
  lastName: string
}

getFullName({
  firstName: 'asd',
  lastName: 'sd'
})

interface Vegetable {
  color?: string,
  readonly type: string
}

const getVegetables = ({ color, type }) => {
  return `A ${color ? (color + ' ') : ''}${type}`
}


console.log(getVegetables({
  color: 'red',
  type: 'orange'
}));


const vegetableInfo = {
  type: 'asd',
  color: 'asdss',
  size: 'asdsdas'
}

let the_obj: Vegetable = {
  type: 'tomato',
  color: 'asdasdasdss'
}

// the_obj.type = 'asd'

interface RoleDic {
  [id: string]: string
}

const role1: RoleDic = {
  1: 'admin'
}

interface Car {
  type: string
}

interface J_car extends Car {
  color: string
}
const benz: J_car = {
  color: 'red',
  type: 'asc'
}

interface Counter {
  (): void,
  count: number
}

const getCounter = (): Counter => {
  const c = () => { c.count++ }
  c.count = 0
  return c
}
const counter: Counter = getCounter()
counter()
console.log(counter.count);
counter()
console.log(counter.count);
counter()
console.log(counter.count);
