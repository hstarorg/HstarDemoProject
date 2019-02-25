module.exports = {
  parse(str) {
    const len = str.length;
    /**
     * @type {idx:number, len: number}
     */
    const state = {
      idx: 0,
      len
    };
    return this._switchParser(str, state);
  },

  _switchParser(str, state) {
    let c = str[0];
    if (c === '[') {
      return this._parseArray(str, state);
    } else if (c === '{') {
      return this._parseObject(str, state);
    } else if (c === '"') {
      return this._parseString(str, state);
    } else if (/\d/.test(c)) {
      return this._parseNumber(str, state);
    } else if (c === 't' || c === 'f') {
      return this._parseBoolean(str, state);
    } else {
      throw new SyntaxError(`Unexpected token ${c}`);
    }
  },

  /**
   * Parse Boolean
   * @param {string} str
   * @param {{idx:number, len:number}} state
   */
  _parseBoolean(str, state) {
    var idx = state.idx;
    if (str.slice(idx, idx + 4) === 'true') {
      return true;
    } else if (str.slice(idx, idx + 5) === 'false') {
      return false;
    } else {
      throw new SyntaxError(`Unexpected token ${str[idx]}`);
    }
  },

  /**
   * Parse Number
   * @param {string} str
   * @param {{idx:number, len:number}} state
   */
  _parseNumber(str, state) {
    var idx = state.idx;
    var n = '';
    while (idx < state.len) {
      var c = str[idx];
      idx++;
      if (!/\d/.test(c)) {
        break;
      }
      n += c;
    }
    state.idx = idx;
    return +n;
  },
  /**
   * Parse String
   * @param {string} str
   * @param {{idx:number, len:number}} state
   */
  _parseString(str, state) {
    var idx = state.idx + 1;
    var n = '';
    var escape = false;
    while (idx < state.len) {
      var c = str[idx];
      idx++;
      if (c === '\\') {
        escape = true;
        continue;
      } else if (c === '"' && escape) {
        n += c;
      } else if (c === '"') {
        break;
      }
      n += c;
    }
    state.idx = idx;
    return n;
  },
  /**
   * Parse Array
   * @param {string} str
   * @param {{idx:number, len:number}} state
   */
  _parseArray(str, state) {
    var idx = state.idx + 1;

    var findIdx = str.indexOf(']', idx);
    var arrStr = str.slice(idx, findIdx);

    state.idx = findIdx + 1;
    var len = arrStr.length;
    return arrStr.split(',').map(x => {
      return this._switchParser(x, { idx: 0, len });
    });
  },

  /**
   * Parse Object
   * @param {string} str
   * @param {{idx:number, len:number}} state
   */
  _parseObject(str, state) {
    var idx = state.idx + 1;

    var findIdx = str.indexOf(']', idx);
    var objStr = str.slice(idx, findIdx);
    return objStr
      .split(',')
      .map(x => {
        var a = x.split(':');
        var key = a[0];
        var value = this._switchParser(a[1], { idx: 0, len: a[1].length });
        return { key, value };
      })
      .reduce((current, item) => {
        current[item.key] = item.value;
        return current;
      }, {});
  },

  stringify(obj) {}
};
