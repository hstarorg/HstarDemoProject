const chai = require('chai');
const assert = chai.assert; // TDD
const expect = chai.expect; // BDD
const should = chai.should(); // BDD

describe('Test Empty', () => {
  it('array|string|object empty', () => {
    let arr = [];
    let a = '';
    let b = {};

    // 判断数组为空
    assert.isTrue(arr.length === 0); // assert没有直接空判断，需要转换一下思路
    expect(arr).empty;
    arr.should.empty;
    // 其他类型判断（注意：null和undefined不能用此方式判断）
    expect(a).empty;
    b.should.be.empty;
  });
});
