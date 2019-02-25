// 布尔
let isDone: boolean = false;

//数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let floatNum: number = 3.14;

//字符串
let name1: string = 'bob';
//注意：上面没用name做为变量，是因为和ts源码的name冲突
name1 = 'smith';
let age = 31;
let sentence: string = `Hello,my name is ${name1},I'll be ${age} years old.`

// 数组
//1:使用[]限定数组类型
let list: number[] = [1, 2, 3];
//2:使用数组泛型Array<number>
let list2: Array<number> = [1, 2, 3];

//元组,表示一个已知元素数量和类型的数组，各类型不必相同
let x: [string, number] = ['hello', 10];
//通过索引获取的值也是限定好类型的

//枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let notSure1: any = 4;
notSure1.ifItExists(); // okay, ifItExists might exist at runtime
notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
//当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list3: any[] = [1, '100', true]

//void,当函数没有返回值或者定义null或者undefined时使用
function warnUser(): void {
    console.log('this is warning message')
}
let unuasble: void = null

//Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let un: number = u;

//never，never类型表示的是那些永不存在的值的类型。
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

//类型断言
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;
//当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
