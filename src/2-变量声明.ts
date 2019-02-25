// 使用let 和 const 替代var ；和es6一样

// 解构数组
let input: number[] = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2 
function f([first, second]: number[]) {
    console.log(first);
    console.log(second);
}
f(input);
//你可以在数组里使用...语法创建剩余变量：
let [first1, ...rest] = [1, 2, 3, 4];

//object
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
//属性重命名，这里的冒号不是指示类型的
let { a: newName1, b: newName2 } = o;
//指定类型
let { a: a1, b: b1 }: { a: string, b: number } = o;
//默认值
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}