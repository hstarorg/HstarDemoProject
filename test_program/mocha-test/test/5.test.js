const chai = require('chai');
const assert = chai.assert; // TDD
const expect = chai.expect; // BDD
const should = chai.should(); // BDD

describe('Test Length', () => {
  it('array length', () => {
    let arr = [1, 2, 3];

    // 判断数组长度
    assert.lengthOf(arr, 3);
    expect(arr).length(3);
    arr.should.length(3);

    // 小于4
    expect(arr).length.below(4);
    expect(arr).length.lessThan(4);
    arr.should.length.below(4);

    // 大于2
    expect(arr).length.above(2);
    arr.should.length.above(2);
  });
});
