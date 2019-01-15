namespace basicTypes {
  // 布尔类型
  const isLoading: boolean = false;

  // 数字类型
  const n1: number = 1;
  const n2: number = 0.01; // 小数
  const n3: number = 0o77; // 8进制
  const n4: number = 0xee; // 16进制
  const n5: number = 0b1010; // 2进制

  // 大整数类型
  const bi: bigint = 666n; // TypeScript 3.2+ 才支持

  // 字符串类型
  const str: string = 'hello, world.';

  // 数组类型
  const arr1: string[] = ['s1', 's2'];
  const arr2: Array<number> = [1, 2];
  const arr3: Array<string | number> = [1, 's1']; // 允许数组元素有多个类型
  // 注意 Array<string | number> 与 Array<string> | Array<number> 的区别
  const arr4: string[] | number[] = [1, 2]; // or ['s1', 's2'] arr4本身可以多类型，而不是数组元素可以多类型

  // 元组类型（多返回值）
  let x: [string, number, boolean];
  x = ['s1', 1, true];
  x[0].toLowerCase(); // 字符串方法
  x[1].toFixed(); // 数字方法
  typeof x[2] === 'boolean'; // Boolean类型

  // 枚举类型
  enum Colors {
    Red,
    Yellow = 5,
    Blue
  }
  const colorIdx: any = Colors.Red; // 此处是枚举中的索引
  console.log(colorIdx); // 0，默认从0开始，如果指定，则以指定为准
  const colorStr = Colors[Colors.Yellow];
  console.log(colorStr); // "Yellow"，默认为枚举中定义的字符串，
  // 如何实现的？其实是靠对象模拟，以上的枚举编译如下：
  /**
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Yellow"] = 5] = "Yellow";
    Colors[Colors["Blue"] = 6] = "Blue";
})(Colors || (Colors = {}));
 */
  // 注意，如果将Yellow的value定义为0会发生什么情况？

  // 任意类型，也就是不限制类型，此时 TypeScript 无法进行类型相关的智能提示。
  let a: any;
  a = 'string';
  a = 1;
  a = true;

  // Void类型，void类型只允许两个值，undefined 和 null。
  const v1: void = null;
  const v2: void = undefined;
  // Void更常见的作用是标记方法无 “返回值”
  function fn1(): void {
    return null; // 满足void类型，ok。
  }

  // Null 类型，只能赋值为null，基本无用
  const nu: null = null;
  // Undefined 类型，只能赋值为 undefined，基本无用
  const und: undefined = undefined;
  // 注意：null和undefined是所有类型的子类型，这意味着什么？
  const str2: string = null; // 可以给其他类型赋值null和undefined。
  // 注意2：--strictNullChecks 开关，建议指定，能避免很多空异常问题。

  // Never 类型，表示永远不存在的值的类型。实际工作中，基本用不上。
  function fn2(): never {
    throw 'error'; // 有无法到达的终点
  }

  // Symbol 类型
  const s: symbol = Symbol('symbol desc');
  console.log(s.description); // 此处Node和浏览器有差异。Node中输出 undefined ；浏览器的话，输出 'symbol desc'

  // 对象类型，非原始类型之外的类型。
  const o1: object = new Date(); // 满足
  const o2: object = {}; // 满足
  // const o3: object = 1; // 不满足，此处就会出错，因为对象类型，不包含原始类型。

  // 类型断言
  // 有时候，我们为了获得提示和后续检查，需要将any类型使用断言主动认定为特定的类型，此时可以如下操作：
  const aa1: any = '666';
  // 认定aa1是字符串，允许获取长度
  const len = (<string>aa1).length; // 3
  // 认定 aa1 是数字类型，获取差值
  const isOk = (aa1 as number) - 2; // 664
  // 注意，两种形式是等价的，选择用什么取决于个人喜好。但是如果是jsx，则只支持 as 写法，所以，个人建议始终使用 as 语法。
}
