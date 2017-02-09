const chai = require('chai');
const assert = chai.assert; // TDD
const expect = chai.expect; // BDD
chai.should(); // BDD

describe('Test Value', () => {
  it('value equal or not equal', () => {
    let a = 'abc';
    let b = [1, '2', false];
    let c = { a: 1, b: { c: 2 } };

    // 直接比较
    assert.equal('abc', a);
    expect(a).eql('abc');
    a.should.eq('abc');

    let cCopy = Object.assign({}, c);

    assert.deepEqual(cCopy, c);
    expect(cCopy).deep.equal(c);
    cCopy.should.be.deep.equal(c);
  });

  it('test multi equal function', () => {
    let c = { a: { b: 'str' } };
    let cCopy = Object.assign({}, c);

    cCopy.should.be.eql({ a: { b: 'str' } }); // 内容相等即可，不判断引用（别名：eqls, deep.equal, deep.eq, deep.equals）
    cCopy.should.be.equal(a = cCopy); // 严格完全相等， === 判断（别名：eq, equals）
  });
});
