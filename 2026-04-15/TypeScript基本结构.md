## 1、声明部分
### 类型声明
let name: string = 'Tom';
let age: number = 25;
### 接口声明
interface Person {
    name: string;
    age: number;
}

## 2、变量声明
let age: number = 30;
const pi: number = 3.14;

## 3、函数声明
function greet(name: string): string {
    return 'Hello, ' + name;
}   
### 箭头函数
const greet = (name: string): string => "Hello, " + name;

## 4、类声明
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return 'Hello, my name is ${this.name}';
    }
}

## 5、接口与类型别名
interface Animal {
    name: string;
    sound: string;
    makeSound(): void;
}
### 类型别名
type ID = number | string;

## 6、模块和导入导出
### 导出
export class Person {
    consructor(public name: string) {}
}
### 导入
import { Person } from './person';

## 7、类型断言
let vaule: any = 'Hello';
let strLength: number = (value as string).length;

## 8、泛型
function identity<T>(arg: T): T {
    return arg;
}
//调用示例，调用时指定类型let output1 = identity<string>("hello");

## 9、注释
### 单行注释
// 这是一个单行注释
### 多行注释
/* 这是多行注释 */

## 10、类型推断、
let num = 10; // 这里 num 被推断为 number

## 11、类型守卫
function isString(val: any): value is string {
    return typeof value === 'string';
}

## 12、异步编程
async function fetchData(): Promise<string> {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

## 13、错误处理
try {
    thow new Error('Something went wrong');
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}

