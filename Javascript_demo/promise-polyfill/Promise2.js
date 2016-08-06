class Promise2 {
  constructor(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('param must be a function');
    }
    this._result = null;
    this._state = 'unresolved';// ['has-resolution', 'has-rejection', 'unresolved']
    this._fulfillmentQueue = [];
    this._rejectionQueue = [];
    try {
      resolver(value => {
        this._doResolve(value);
      }, reason => {
        this._doReject(reason);
      });
    } catch (e) {
      this._doReject(e);
    }
  }

  _doResolve(value) {
    this._state = 'has-resolution';
    let item;
    while ((item = this._fulfillmentQueue.splice(0, 1)).length > 0) {
      item[0](value);
    }
  }

  _doReject(reason) {
    this._state = 'has-rejection';
    let item;
    while ((item = this._rejectionQueue.splice(0, 1)).length > 0) {
      item[0](reason);
    }
  }

  _processResult(onFulfillment, onRejection) {
    if (this._state === 'has-resolution' && typeof onFulfillment === 'function') {
      return onFulfillment(this._result);
    }
    if (this._state === 'has-rejection' && typeof onRejection === 'function') {
      return onRejection(this._result);
    }
  }

  then(onFulfillment, onRejection) {
    if (this._state === 'unresolved') {
      this._fulfillmentQueue.push(onFulfillment);
      this._rejectionQueue.push(onRejection);
    } else {
      this._processResult(onFulfillment, onRejection);
    }
  }

  catch(onRejection) {
    this.then(undefined, onRejection);
  }

  static all() {

  }

  static race() {

  }

  static reject() {

  }

  static resolve() {

  }
}

module.exports = Promise2;