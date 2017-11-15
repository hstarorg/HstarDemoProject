var user = {};
user.name = 'XXX';

function defineReactive(obj, key, value) {
  var property = Object.getOwnPropertyDescriptor(obj, key);
  var getter = property && property.get;
  var setter = property && property.set;
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      return getter ? getter.call(obj) : value;
    },
    set(newVal) {
      // 先取出当前值
      var val = getter ? getter.call(obj) : value;
      // 值一样，直接return
      if (newVal === val || (newVal !== newVal && val !== val)) {
        return;
      }
      // 把值设置回去
      if (setter) {
        setter.call(obj, newVal);
      } else {
        value = newVal;
      }
      console.log('我被改变了');
      // todo: 这里可以发布通知
    }
  })
}
var user = {};
defineReactive(user, 'name', 'abc');
