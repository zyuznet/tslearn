## 1、String 字符串
let message: string = "Hello,TypeScript!";

## 2、number 数字
let age: number = 25;
let temperature: number = 36.5;

## 3、boolean 布尔值
let isStudent: boolean = true;
let isCompleted: boolean = false;

## 4、arrary 数组
let numbers: number[] = [1, 2, 3]; 
let names: string[] = ["Alice", "Bob", "Charlie"]
let names: Array<string> = ["Alice", "Bob", "Charlie"]

## 5、tuple 元组
let person: [string, number] = ["Alice", 25];

## 6、enum 枚举
enum Color {
    red,
    green,
    blue,
}
let color: Color = Color.red;

## 7、any 任意类型
let randomValue: any = "Hello";
randomValue = 123;
let X: any = 123;
X = "Hello";
X = true;
let Y: any = 4;
Y.toFixed();// 编译时不会报错，运行时出错
Y.ifItExists();// 编译时不会报错，运行时出错
let arrayList: any[] = [1, "Hello", true];
arrayList[0] = "World";
arrayList[1] = 2;

## 8、void 空类型
function greet(message: string): void {
    console.log(message);
}
greet("Hello,World!");

## 9、null 和 undefined
let nothing: null = null;// 空值
let nothing2: undefined = undefined;/// 未定义值
let x: number;
x = 123;
x = undefined; // 错误：不能将类型“undefined”分配给类型“number”。
x = null; // 编译错误

//如果tsconfig.json中strictNullChecks设置为false(非严格模式)则可以把null和undefined赋值给任意类型变量。
{
    "compilerOptions": {
        "strict": false,// 关闭严格模式
        "strictNullChecks": false// 关闭严格空检查
    }
}
//更好的做法，明确声明可以为null或undefined的变量类型。
let x: number | null = 123;// 类型“number | null”
x = null; // OK
x = 4; // OK
//建议开启严格模式(默认)，并在必要时使用联合类型。

## 10、never 类型
function throwError(message: string): never {
    throw new Error(message);
}

// never类型是其他类型（包括any类型）的子类型，它表示的是那些永不存在的值的类型。
// 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回类型。
let x: never;
let y: number;
x = 123; // 错误：类型“123”不能赋值给类型“never”。
x = (() => { throw new Error('exception') })(); // OK never类型可以发赋值给never类型。
y = (() => { throw new Error('exception') })();// OK never类型可以发赋值给number类型。
y = x; // OK never类型可以发赋值给number类型。

functio error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}

## 11、object 类型
// object类型表示非原始类型，适用于复杂的对象结构。
let obj: object = { name: "Alice", age: 25 };
obj.name = "Bob"; // OK

## 12、联合类型
let x: number | string;
x = 123;
x = "Hello";

## 13、unknown 不确定的类型
// unknown类型类似于any类型，但更安全。它可以赋值给任何其他类型的变量，但在赋值之前需要先进行类型检查。
let value: unknown = "Hello";
if (typeof value === "string") {
    let str: string = value;
}

## 14、类型断言
// 类型断言允许开发者手动指定一个值的类型。
let value: any = "Hello";
let str: string = <string>value;
let num: number = (<string>value).length;
let num: number = (value as string).length;

## 15、字面量类型
let direction: "up" | "down" | "left" | "right";
direction = "up";
// 字面量类型可以用来定义一个值的集合，并确保所有值都属于这个集合。