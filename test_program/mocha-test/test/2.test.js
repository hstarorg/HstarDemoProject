const chai = require('chai');
const assert = chai.assert; // TDD
const expect = chai.expect; // BDD
chai.should(); // BDD

describe('Test Property', () => {
  it('property and value', () => {
    let a = {
      b: 1,
      c: false,
      deep: {
        test: '1'
      }
    };

    // 对象a必须包含属性b
    assert.property(a, 'b');
    expect(a).has.property('b');
    a.should.has.property('b');

    // 对象a不能包含属性d
    assert.notProperty(a, 'd');
    expect(a).not.has.property('d');
    a.should.not.has.property('d');

    // 对象必须有嵌套属性deep.test
    assert.deepProperty(a, 'deep.test');
    expect(a).has.deep.property('deep.test');
    expect(a).has.property('deep').has.property('test');
    a.should.has.deep.property('deep.test');
    a.should.has.property('deep').has.property('test');    

    // 对象必须不包含嵌套属性deep.test2
    assert.notDeepProperty(a, 'deep.test2');
    expect(a).not.has.deep.property('deep.test2');
    a.should.not.has.deep.property('deep.test2');

    // 对象属性值必须等于指定值，注意，是===判断
    assert.propertyVal(a, 'b', 1);
    expect(a).has.property('b', 1);
    a.should.has.property('b', 1);

    // 对象属性值必须不等于指定值
    assert.propertyNotVal(a, 'c', true);
    expect(a).not.has.property('c', 0);
    a.should.not.has.property('c', undefined);
  });
});
