const chai = require('chai');
const assert = chai.assert; // TDD
const expect = chai.expect; // BDD
chai.should(); // BDD

describe('Test object exist', () => {
  it('object is exist', () => {
    let a = 'abc';
    let b = 1;
    let c = true;
    let d = /xxx/;
    let e = new Date();
    let f = function () { };
    let g = {};
    let h = [];
    assert.isString(a); // a必须是字符串
    assert.isNotString(f); // f必须不是字符串
    expect(b).to.be.a('number'); // b必须是一个数字
    expect(c).to.be.a('boolean'); // c必须是boolean
    d.should.be.a('RegExp'); // d必须是正则
    e.should.be.a('date'); // e必须是Date
    assert.isArray(h); // h必须是Array
    assert.isObject(g); // g必须是对象
  });
});
