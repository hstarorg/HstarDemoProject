const runFn = (fn, counter = 10) => {
  for (let i = 0; i < counter; i++) {
    fn();
  }
};

const buildData = (len) => {
  const data = {
    list: []
  };
  for (var i = 0; i < len; i++) {
    data.list.push({
      index: i,
      user: '<strong style="color:red">糖饼</strong>',
      site: 'test',
    });
  };
  return data;
};

module.exports = {
  runFn,
  buildData
};
