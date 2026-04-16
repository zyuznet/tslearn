///枚举角色类型
enum Role {
    Admin,
    User,
    Guest,
}

///定义一个接口来描述用户对象
interface User {
    id: number; //用户ID --number类型
    username: string; //用户名 --string类型
    isActive: boolean; //是否激活 --boolean类型
    role: Role; //角色类型 --Role枚举类型
    hobbies: string[]; //兴趣爱好 --string数组类型
    contactInfo: [string, number]; //联系方式，例如电话号码和邮箱地址 --元组类型
}

//创建一个用户对象，符合User接口的结构
const user: User = {
    id: 1,
    username: 'Alice',
    isActive: true,
    role: Role.User,
    hobbies: ['reading', 'traveling'],
    contactInfo: ['alice@example.com', 123456789],
};
//定义一个函数来获取用户信息，参数类型为User，返回值类型为string
function getUserInfo(user: User): string {
    return `User ${user.username} is ${user.isActive ? 'active' : 'inactive'} with role ${Role[user.role]}.`;//user.role是Role枚举类型(如果类型为1则输出1)，通过Role[user.role]可以获取角色的名称字符串
}
//定义一个函数来打印用户信息，参数类型为User，无返回值
function printUserInfo(user: User): void {
    console.log(getUserInfo(user)); //调用函数并打印结果
}

//定义混合类型，可以是数字或字符串，查找用户
function findUser(query: number | string): User | undefined {
    if (typeof query === "number") {
        return query === user.id? user : undefined;//返回的是对象user或未定义
    }else if (typeof query === "string") {
        return query === user.username? user : undefined;
    }
    return undefined;
}

//定义一个函数来抛出一个错误，参数类型为string，无返回值
function throwError(message: string): never{
    throw new Error(message); //抛出一个错误，函数永远不会正常返回
}

//使用any处理未知类型的数据
let unknowData: any = "This is a string"; //未知类型，可以赋值为任何类型
unknowData = 12345; //重新赋值为数字

//使用unknown处理不确定的数据，更安全
let someData: unknown = "Possibly a string"; //不确定类型，不能直接使用
if (typeof someData === "string") {
    console.log(`Length of string: ${someData.length}`);
    //``模板字符串，可以安全地使用someData作为字符串,'''单引号字符串，""双引号字符串
    //模板字符串可以嵌入表达式，例如${someData.length}会被替换为字符串的长度。引号字符串会输出原数据
}

//调用各个函数测试
printUserInfo(user); //输出：User Alice is active with role User.
console.log(findUser(1)); //输出：User对象
console.log(findUser("Alice")); //输出：User对象
//throwError("Something went wrong!!!!!"); //输出：Error: Something went wrong

//使用null和undefined类型的变量
let nullData: null = null; //null类型
let undefinedData: undefined = undefined; //undefined类型