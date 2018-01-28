class LFU {
  constructor(maxKeyCount) {
    this.maxKeyCount = maxKeyCount;
    this.storeMap = new Map();
    this.countArr = []; // Array<Set> 结构，数组的index表示访问次数，Set是当前访问次数的key
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
    const keySet = this.countArr[index];
    if (keySet && keySet.has(key)) {
      keySet.delete(key);
    }
  }

  _addKeyAtIndex(key, index) {
    const keySet = this.countArr[index];
    if (keySet) {
      if (keySet.has(key)) {
        keySet.delete(key);
      }
      keySet.add(key);
    } else {
      const newKeySet = new Set();
      newKeySet.add(key);
      this.countArr[index] = newKeySet;
    }
  }

  put(key, value) {
    // 如果最大长度小于0，直接停止put
    if (this.maxKeyCount <= 0) {
      return;
    }
    const hasKey = this.storeMap.has(key);
    let storeValue = { count: 0 };
    // 如果已经存在，只需要更换值
    if (hasKey) {
      storeValue = this.storeMap.get(key);
    }
    storeValue.value = value;
    // 如果已经满了，则执行删除操作
    if (!hasKey && this.length >= this.maxKeyCount) {
      this._deleteLeastVisitedKey();
    }
    // 存储数据
    this.storeMap.set(key, storeValue);
    if (hasKey) {
      // 如果key存在
      this._removeKeyAtIndex(key, storeValue.count);
      storeValue.count++;
      // 重新记录访问的key
      this._addKeyAtIndex(key, storeValue.count);
    } else {
      // 处理Key
      this._addKeyAtIndex(key, storeValue.count);
    }
  }

  /**
   * 删除访问次数最少的key
   */
  _deleteLeastVisitedKey() {
    for (var i = 0, len = this.countArr.length; i < len; i++) {
      let keySet = this.countArr[i];
      // console.log(keySet);
      if (keySet && keySet.size > 0) {
        const key = keySet.keys().next().value;
        this.storeMap.delete(key);
        keySet.delete(key);
        break;
      }
    }
  }
}

module.exports = LFU;
