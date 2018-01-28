class LFU {
  constructor(maxKeyCount) {
    this.maxKeyCount = maxKeyCount;
    this.storeMap = new Map();
    this.countArr = [];
  }

  get length() {
    return this.storeMap.size;
  }

  get(key) {
    if (!this.storeMap.has(key)) {
      return null;
    }
    const storeValue = this.storeMap.get(key);
    // 移除记录的Key
    this._removeKeyAtIndex(key, storeValue.count);
    // 访问次数加1
    storeValue.count++;
    // 重新记录访问的key
    this._addKeyAtIndex(key, storeValue.count);
    // 返回值
    return storeValue.value;
  }

  flush() {
    this.storeMap.clear();
    this.countArr.length = 0;
  }

  _removeKeyAtIndex(key, index) {
    const keyObj = this.countArr[index];
    if (keyObj) {
      delete keyObj[key];
      this.countArr[index] = keyObj;
    }
  }

  _addKeyAtIndex(key, index) {
    const keyObj = this.countArr[index] || {};
    keyObj[key] = true;
    this.countArr[index] = keyObj;
  }

  put(key, value) {
    const hasKey = this.storeMap.has(key);
    let storeValue = { count: 0 };
    if (hasKey) {
      storeValue = this.storeMap.get(key);
    }
    storeValue.value = value;
    // 额度已满
    if (this.length >= this.maxKeyCount) {
      this._deleteOld();
    }
    this._addKeyAtIndex(key, storeValue.count);
    this.storeMap.set(key, storeValue);
  }

  /**
   * 删除访问次数最少的key
   */
  _deleteOld() {
    for (var i = 0, len = this.countArr.length; i < len; i++) {
      let countKeys = this.countArr[i];
      let keys;
      if (countKeys && (keys = Object.keys(countKeys))) {
        if (keys.length > 0) {
          this.storeMap.delete(keys[0]);
          break;
        }
      }
    }
  }
}

module.exports = LFU;
