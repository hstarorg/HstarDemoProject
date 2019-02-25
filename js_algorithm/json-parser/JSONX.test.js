const JSONX = require('./JSONX');

function parse(val) {
  var actual = JSONX.parse(val);
  var expect = JSON.parse(val);
  console.assert(`${actual}` === `${expect}`, `actual = |${actual}| expect = |${expect}|`);
}

parse(`1`);
parse(`"xxx"`);
parse(`true`);
parse(`[1,2,3,4]`);
parse(`[1,"2",true,4]`);
parse(`[1,"2",true,1411]`);

parse(`[1,"2",1,1411]`);

parse(`{"a":1,"b":"2"}`);
