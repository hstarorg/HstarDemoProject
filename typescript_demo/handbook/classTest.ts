namespace classTest {
  // 和ES6+一致，我们可以定义类
  class Animal {
    // 类有构造函数，如果没有定义，则采用内部默认构造函数
    // 构造函数也是函数，采用类似函数的申明
    // 注意：此处与函数有一个差异，不允许标记返回值
    constructor(name: string) {
      this.name = name;
    }

    public name: string;

    protected sleep() {}

    private _sleep2() {}
  }
  // 类可以继承
  class Cat extends Animal {
    // 如果在子类定义构造函数，必须要使用super，调用父类的构造
    constructor(name: string) {
      super(name);
    }
  }
  // 涉及到类，就有类属性（方法）的修饰符
  class TomCat extends Cat {
    // 公开方法，可以被外部访问
    public eatMouse() {}

    // 如果不提供修饰符会怎样？不提供则默认为public
    eatFish() {}

    // 私有方法，吃东西
    private _eat() {}

    // 修饰符也可以修饰属性
    private age: number;
  }
  // 除了public和private，还有protected，这个是什么作用呢？
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name);
      // Work...
      this.age = age;
      this.friend = new Cat('Tom');
    }
    public sleep() {
      // 调用父类的sleep。
      super.sleep();
      // 不能调用父类的私有方法
      // super._sleep2(); // Not working.
    }

    // Readonly 只能用于修饰类属性，使用readonly之后，该属性只能在构造函数中进行赋值。
    readonly age: number;

    readonly friend: Cat;

    // 注意，如果是属性是对象，则readonly只是锁定对象引用，对对象内部属性的赋值不受限制。
    public addFriend(cat: Cat) {
      this.friend.name = cat.name;
    }

    public setAge(age: number) {
      // this.age = age; // Not working.
    }
  }

  // 假设动物都可以行走，但是具体的动物行走的方式又不一样，如果在Animal类中进行限定呢？
  // 此时我们需要将动物定义为抽象类，在其中则可以约定这一类事物共有的一些行为或者属性
  abstract class Animal2 {
    // 定义抽象属性，动物都应该分属于一个物种
    abstract type: string;

    // 定义抽象方法，动物都可以行走
    abstract walk(): void;
  }

  /**
   * 综上，类中（方法、属性、构造函数）访问修饰符有如下几种
   * private: 修饰方法、属性、构造函数（一般不用于构造函数）
   * public: 修饰方法、属性、构造函数，方法、属性的默认修饰符
   * protected: 修饰方法、属性、构造函数（构造函数默认使用protected修饰符）
   * readonly: 修饰属性，修饰后，该属性只能在构造函数中被初始化。
   * abstract: 修饰抽象类中的属性和方法，约定某一类事物的公共特性（属性、方法）
   */

  // 如果要把类的某个属性私有化，除了private还有其他办法么？
  // 存取器！也就是getter/setter
  class ChineseDog extends Dog {
    constructor() {
      super('中华田园犬', 5);
    }

    // 思考？这会有什么问题？
    // 自己访问自己、栈溢出
    get age() {
      return this.age;
    }

    // 如果有私有的身高属性
    private _height: number;

    // 换个名字，不要自己访问自己
    get height() {
      return this._height;
    }
    // 如果要赋值呢？
    set height(value: number) {
      this._height = value;
    }

    /**
     * 对于存取器来说，如果只带有get，则认为是只读属性。生成的d.ts文件中，将会自动带上readonly修饰符。
     * getter/setter是ES5的特性，不是语法糖。所以要求编译环境必须大于等于es5。
     */
  }

  // 以上，仅仅是类的实例属性，对于类来说，还有静态属性。
  // 首先从类的前身，方法说起
  // 对象，人类
  function Person() {}
  // 人类自身，有总数这个属性，该属性为静态属性，和具体的人（实例）无关。
  Person.total = 0;
  // 也可以通过人类，创建一个具体的人。
  const p1 = new Person();

  // 换成类，也是同理
  class Person2 {
    // 类有实例属性
    name: string;
    // 类有实例方法
    eat() {}
    // 也可以有静态属性
    static total: number = 0;
  }
  // 对于静态属性，直接使用类本身进行访问
  console.log(Person2.total);

  // 接下来，让我们看看申明一个类，发生了什么？
  class User {
    name: string;
    login(name: string) {
      this.name = name;
    }
  }
  // 类本身也是一个类型
  let u1: User;
  // 类本身可以通过new进行实例化
  u1 = new User();
  u1.login('hi');
  // 换个角度说，我们可以认为类具有实例部分与静态部分这两个部分。

  // 此处 User2 是取 User的类型，并不是User实例的类型
  let User2: typeof User = User;
  const u2 = new User2();
  u2.login('hello');

  // 通过上面的演示，可以发现，类定义会创建实例类型，和一个构造函数。既然类可以创建一个类型，那么在需要使用接口的时候，是否也可以使用类呢？
  class Point {
    x: number;
    y: number;
  }
  // 让接口继承类（常规是继承接口）
  interface Point3d extends Point {
    x: number;
  }
}
