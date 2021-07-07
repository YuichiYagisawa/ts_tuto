let hasValue = true;
let count = 10;
let float = 0.9;
let negative = -0.1;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;
hello = 'hello';

const person = {
  name: {
    first: 'Jack',
    last: 'smith'
  },
  age: 21
}

const fruits = ['Apple', 'Banana', 'Grape'];


// tuple型・・・決まった形の配列を作るとき
const book: [string, number, boolean] = ['bussiness', 1500, false];

enum CoffeeSize  {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.VENTI;
console.log(CoffeeSize.SHORT);

let anything: any = true;
anything = 'hello';
anything = 21;
let banana = 'banana';
banana = anything;

let unionType: number | string = 10;
unionType = 'hello';
let unionTypes: (number | string)[] = [21, 'hello']



type ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple'
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  size: clothSize
}