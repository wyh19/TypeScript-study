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