namespace interfaceTest {
  // 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
  // 另外一种定义方式是type，后文再分解。
  interface Person {
    name: string;
    age: number;
  }
  // 定义变量的时候，就需要满足Person的约定。
  const p: Person = { name: 'Jay', age: 27 };

  // 或许身高是一个秘密，不是所有人都愿意提供，那么就可以用【可选属性】
  interface Person {
    height?: number;
  }

  // 可以定义身高，也可以不提供
  // 注意，此时还有一个知识点，同名的interface是会相互合并的。
  const p1: Person = { name: 'Jay', age: 27, height: 173 };

  // 假设名字一旦设定就不能更改，我们可以标记为 readonly
  interface Person2 {
    readonly name: string;
  }
  const p2: Person2 = { name: 'Tom' };
  // p2.name = 'New Name'; // 出错，不能对readonly的属性赋值。

  // 如果有额外的属性呢？
  // const p3: Person2 = { name: 'Tom', age: 1 }; // 有多的属性会提示错误！
  // 如何解决？
  // 方案1：TS会在对象赋值中，忽略检查多余属性
  var temp = { name: 'Tom', age: 1 };
  const p4: Person2 = temp;
  // 方案2：手动认定是可兼容的类型。
  const p5: Person2 = { name: 'Tom', age: 1 } as Person2;

  // 接口更常见的场景，约定类的实现
  interface IFly {
    fly(): string;
  }

  class Bird implements IFly {
    fly() {
      return 'I can fly.';
    }
  }

  // 那如果想限制构造函数呢？
  // 思考下，对于一个function来说，会有两种东西：实例方法和静态方法，构造函数是属于静态方法类别，因此，一般我们是定义两个不同的interface来实施。
  interface IAnimalConstructor {
    new (name: string, age: number): IAnimal;
  }
  interface IAnimal {}

  class Animal implements IAnimal {
    constructor(name: string, age: number) {}
  }
  function createAnimal(ctro: IAnimalConstructor, name: string, age: number) {
    return new ctro(name, age);
  }

  // 另一种场景，又要标记对象的实例方法，也要标记类的静态属性方法，应该如何呢？
  interface ISpecialClass {
    (): void;
    displayName: string;
  }

  const sc: ISpecialClass = function() {};
  sc.displayName = 'hello';
  console.log(sc.displayName);

  // 除此之外，TS可以定义带索引的类型
  // 在TS中，支持两种索引签名：字符串和数字，如下：
  // 定义Dictionary
  interface NumberDictionary {
    [index: string]: number; // 定义索引，其中index名称任意
  }
  const dict: NumberDictionary = { aa: 1, bb: 2 };
  console.log(dict['aa']);
  // 定义只读字符串数组
  interface ReadonlyStringArray {
    readonly [i: number]: string;
  }
  const readonlyStrArr: ReadonlyStringArray = ['xx', 'xxx'];
  console.log(readonlyStrArr[0]);
}
