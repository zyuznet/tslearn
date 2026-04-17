"use strict";
var str = '1';
//var str2: number = <number><any>str;// str2的值为1
var str2 = str; // str2的值为1
console.log(str2); // 输出1
//类型断言的作用是告诉编译器我们知道这个值的类型是什么，编译器会按照我们指定的类型进行处理，而不会进行类型检查，也不会进行类型转换。
if (typeof str2 === 'number') {
    console.log('str2是一个数字');
}
else if (typeof str2 === 'string') {
    console.log('str2是一个字符串');
}
{
    console.log('str2不是一个数字');
}
console.log("-------------------");
var num = 42; // TypeScript推断num为number类型
console.log("num的类型是：" + typeof num + "，值是：" + num);
num = "Hello"; // 错误：不能将string类型赋值给number类型
console.log("num的类型是：" + typeof num + "，值是：" + num);
