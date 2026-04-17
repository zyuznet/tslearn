"use strict";
var globalVar_num = 1; //全局变量
class Numbers {
    num_val = 13; //成员变量
    static sval = 10; //静态变量
    storeNum() {
        var local_num = 14; //局部变量
    }
}
console.log("全局变量：" + globalVar_num);
console.log("访问静态变量：" + Numbers.sval);
var obj = new Numbers();
console.log("访问成员变量：" + obj.num_val);
//console.log("访问静态变量：" + obj.sval); // 访问静态变量也可以通过对象来访问，但不推荐，因为静态变量是属于类的，而不是属于对象的
console.log("访问局部变量：" + obj.storeNum()); // 访问局部变量会报错，因为它只能在函数内部访问 
