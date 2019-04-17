interface IPerson {
  age?: number; // 可选属性
  readonly name: string; // 只读属性
  [idx: number]: string; // 索引类型（模拟字典）
}

class Person implements IPerson {
  [idx: number]: string;
  age?: number;
  name: string;
}

// --------------------------------

interface IFunc {
  (n1: number, n2: number): number;
}

const add: IFunc = function(n1, n2) {
  // 有了类型约束后，会自动进行类型推断
  return n1 + n2;
};

// ---------------------------------

interface IFunc2 {
  (n1: number, n2: number): number;
  displayName: string;
}

const add2: IFunc2 = function(n1, n2) {
  // 有了类型约束后，会自动进行类型推断
  return n1 + n2;
};
add2.displayName = 'add2'; // 如果没有这句，会怎样？

// ------------------------------

interface PersonInterface {
  name: string;
  age?: number;
  sleep: (hour: number) => string;
}

interface PersonConstructor {
  // 定义构造
  new (name: string, age?: number): PersonInterface;
}

class PersonIns implements PersonInterface {
  sleep: (hour: number) => string;
  name: string;
}

function createPerson(ctor: PersonConstructor, name: string): PersonInterface {
  return new ctor(name);
}

createPerson(PersonIns, 'hi');

// -------------------------------

function fun1(a: { a: number }) {}

fun1({ a: 1, b: 2 });
