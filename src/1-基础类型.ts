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
let sentence: string = `Hello,my name is ${ name1 },I'll be ${ age } years old.`

// 数组
//1:使用[]限定数组类型
let list:number[] = [1,2,3];
//2:使用数组泛型Array<number>
let list2:Array<number> = [1,2,3];

//元组,表示一个已知元素数量和类型的数组，各类型不必相同
let x:[string,number] = ['hello',10];
//通过索引获取的值也是限定好类型的



