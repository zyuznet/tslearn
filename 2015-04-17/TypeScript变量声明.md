## 1、变量声明

var [变量名] : [类型] = 值;
var uname: string = "张三";

//没有初始值，变量默认设置undefined
var [变量名] : [类型];
var uname: string;

//声明变量时可以省略类型，该变量可以是任意类型
var [变量名] = 值;
var uname = "张三";

//声明没有初始值和类型的变量，默认设置为any类型，默认值为undefined
var [变量名];
var uname;

## 2、类型断言
//它是一种为编译器提供关于如何分析代码的方法

<类型>值   或  值 as 类型
var str = '1'
var str2: number = <number><any>str;// str2的值为1
console.log(str2); // 输出1，类型为string，详见demo2.ts

## 3、类型推断
//当没有明确指定类型时，TypeScript会根据变量的初始值来推断出一个类型
var num = 42; // TypeScript推断num为number类型
console.log("num的类型是：" + typeof num+"，值是：" + num); 
num = "Hello"; // 错误：不能将string类型赋值给number类型
console.log("num的类型是：" + typeof num+"，值是：" + num);

## 4、变量作用域
//TypeScript中的变量作用域与JavaScript类似，主要有全局作用域和函数作用域两种
见demo3.ts