## 静态类型
let name:string = "张三";\
let age:number = 20;

## 类型推断
let name = "张三";

## 接口
interace Person {
    name: string;
    age: number;
    greet(): void;
}
### 接口的实现
class Student implements Person {
    construtor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

## 类型别名
type StringOrNumber = string | number;
let value: StringOrNumber = 123;

## 枚举
enmu Directional {
    up,
    down,
    left,
    right,
}
let direction: Directional = Directional.up;

## 元组
let tuple: [string, number] = ["张三", 20];

## 访问控制修饰符
class Person {
    private name: string;
    protected age: number;
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

## 抽象类
abstract class Animal {
    abstrac makeSound(): void;
}
class Dog extends Animal {
    makeSound() {
        console.log("汪汪");
    }
}

## 泛型
function identity<T>(value: T): T {
    retrun value;
}
let num = idenity<number>(123);

## 模块和命名空间
export function add(a:number, b:number): number {
    return a + b;
}

import { add } from "./math";
console.log(add(1, 2));

## 类型守卫
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id.toFixed(2));
    }
}

## 可选链和空值合并运算符
*果user.address.city存在，则打印出来；否则返回undefined。*
let user = { name: "张三", address: { city: "北京" } };
console.log(user?.address?.city);
*如果value为null或者undefined，则返回"default"*
let value = null;
consoel.log(value ?? "default");

## 类型兼容性和工具类型
interace Todo {
    title: string;
    description: string;
}
*可选属性*
let parttiaTodo: Partial<Todo> = {titile: "学习TypeScript"};

## 编译期检查

## ES6+特性
*支持装饰器、模块、异步迭代器等，且能编译成兼容js版本*