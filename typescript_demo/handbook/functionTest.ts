namespace functionTest {
  // 函数是JS中的一等公民，在TS中，函数仍然是主要的定义行为的方式。
  // 输入参数和输出参数就可以界定一个函数的类型，所以TS中，可以为函数定义类型。

  // 定义式定义函数，那么类型定义如下：
  function fun1(p1: string, p2: number): string {
    // 任何对象与字符串相加（实际是连接），将返回字符串。
    return p1 + p2;
  }

  // 变量式定义函数
  // 其中 fun2冒号之后后 (p1: string, p2: number) => string 就是函数类型。
  const fun2: (p1: string, p2: number) => string = (p1: string, p2: number) => {
    return p1 + p2;
  };

  // 类型推断，既然一定定义了函数类型，那么我们在书写函数的时候，是否可以省略类型呢？实际是可以的！
  const fun3: (p1: string, p2: number) => string = (p1, p2) => {
    // 已知函数类型，则p1、p2的类型将会自动推断出来。
    return p1 + p2;
  };
  // 另一种类型推断
  const fun4 = (p1: number, p2: string): string => {
    return p1 + p2;
  };

  // 在JS中，每个参数都是可选了，可传可不传。在TS中，为了校验参数，默认是会校验参数个数和类型的。那么，如何定义可选参数呢？
  // 在参数名之后加上？，则表示该参数可选
  // 但是，注意，可选参数一定在必须参数的后面。
  // 思考，如果没这个规则，会发生什么？
  const fun5 = (p1: number, p2?: string): string => {
    return p1 + p2;
  };
  fun5(1); // Working
  fun5(1, '2'); // Working

  // 既然有了可选参数，那么继续延伸，就是参数的默认值了，使用如下：
  // 注意，参数默认值和可选参数相互冲突，选择其一即可，不能二者同时使用。
  const fun6 = (p1: number, p2: string = 'hi'): string => {
    return p1 + p2;
  };

  // 注意，默认参数不需要放在必选参数的后面，但如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值。
  const fun7 = (p1: number = 1, p2: string): string => {
    return p1 + p2;
  };
  // 要使用p1的默认参数值，则必须手动传入 undefined，注意，只有参数值为undefined时，才会使用默认参数。
  fun7(undefined, '');
  // Why？
  // var fun7 = function (p1, p2) {
  //   if (p1 === void 0) { p1 = 1; }
  //   return p1 + p2;
  // };

  // JS中允许调用函数时传递多个参数，如果在函数定义时，没有明确接收多余参数，我们可以arguments来访问。
  // TS对此进行了增强，可以把所有剩余的参数集合到一个变量汇总（必然是个数组）
  // 实际上，JS高版本，也原生支持该用法（不包含类型定义）。
  function fun8(p1: number, ...args: string[]): void {}

  // 如果了解过静态语言的话，或多或少听说过函数重载
  // 函数重载：当多个同名函数的形式参数的数据类型不同或数量不同时，就构成了函数的重载。
  // TS中函数的重载用法如下，细节点：
  // 1. 重载列表必须只包含签名
  // 2. 函数实现的参数类型和返回值类型必须为any
  // 3. 在定义重载的时候，一定要把最精确的定义放在最前面（设计到TS的类型检查，先定义的先匹配）
  // 4. 满足重载的规则，形参的数据类型不同或数量不同。
  // 思考：可选参数算重载么？
  function fun10(p: number): number;
  function fun10(p: string): number;
  function fun10(p: any): any {
    if (typeof p === 'number') {
      return p;
    }
    if (typeof p === 'string') {
      return +p;
    }
  }
  fun10(1);
  fun10('1');

  // 最后，再说下函数中的 this。
  const util = {
    a: 'a',
    log(this: { a: string }) {
      // 此处的this，默认为any，要让此处的this也可以提示，怎么办呢？
      // 给this指定类型。
      this.a;
    },
    addEventListener(onClick: (this: Window, e: Event) => void) {},
    addEventListener2(onClick: (e: Event) => void) {}
  };
  util.addEventListener(function(e) {
    // 此处的this，默认也是any，如果要定义this的类型该如何做呢？
    // !在定义函数类型的时候，定义this的类型
    this.name;
  });
  // 除此之外，也可以在定义回调函数的时候，定义类型
  // 注意，此处定义的类型，不可以和回调函数签名定义的this冲突（两个地方定义一出即可）
  util.addEventListener2(function(this: string, e) {});
  // !强调：this类型定义，不能用于箭头函数。
  function fun11(this: { a: string }) {
    var a = 123;
    // 箭头函数，如何定义this呢？取定义函数时的外层this，所以只需要在fun11上标记this即可。
    return () => {
      console.log(this.a);
    };
  }
}
