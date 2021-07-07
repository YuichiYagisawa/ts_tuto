var hasValue = true;
var count = 10;
var float = 0.9;
var negative = -0.1;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
// tuple型・・・決まった形の配列を作るとき
var book = ['bussiness', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.VENTI;
console.log(CoffeeSize.SHORT);
var anything = true;
anything = 'hello';
anything = 21;
var banana = 'banana';
banana = anything;
var unionType = 10;
unionType = 'hello';
var unionTypes = [21, 'hello'];
var apple = 'apple';
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: clothSize
};
