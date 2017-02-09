const chai = require('chai');
const assert = chai.assert; // TDD
const expect = chai.expect; // BDD
const should = chai.should(); // BDD

describe('Test Value', () => {
  it('value exist', () => {
    let a = 'hi';
    let b = null;
    let c;

    // 对象存在
    assert.isOk(a);
    expect(a).to.be.exist;
    a.should.to.be.exist;

    // 对象不存在
    assert.isNotOk(b);
    assert.isNotOk(c);
    expect(b).to.be.not.exist;
    expect(c).to.be.not.exist;
    should.not.exist(b);
    should.not.exist(c);
  });
});
