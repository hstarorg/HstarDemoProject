let noop = () => { };

let isFn = (fn) => typeof fn === 'function';

class Deferred {
  constructor(onFulfilled, onRejected, promise) {
    this.resolve = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.reject = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }
}

class Promise2 {
  constructor(resolver) {
    if (typeof resolver !== 'function') {
      throw new TypeError('param must be a function');
    }
    this._result = null;
    this._state = 'unresolved';// ['has-resolution', 'has-rejection', 'unresolved']
    this._deferred = [];

    this._doResolve(resolver);
  }

  _doResolve(resolver) {
    let done = false; //避免先resolve,又再次reject
    try {
      resolver(value => {
        if (done) return;
        done = true;
        this._resolve(this, value);
      }, reason => {
        if (done) return;
        done = true;
        this._reject(this, reason);
      });
    } catch (e) {
      if (done) return;
      done = true;
      this._reject(this, e);
    }
  }

  _resolve(self, value) {
    self._state = 'has-resolution';
    self._result = value;
    self._doProcess();
  }

  _reject(self, reason) {
    self._state = 'has-rejection';
    self._result = reason;
    self._doProcess();
  }

  _doProcess() {
    this._deferred.forEach(deferred => {
      this._processResult(deferred);
    });
  }

  _processResult(deferred) {
    let hasResolution = this._state === 'has-resolution';
    if (hasResolution) {
      if (isFn(deferred.resolve)) {
        deferred.resolve(this._result);
      }
    } else {
      if (isFn(deferred.reject)) {
        deferred.reject(this._result);
      }
    }
  }

  _buildPromise(deferred) {
    if (this._state === 'unresolved') {
      console.log('add');
      this._deferred.push(deferred);
      return;
    }
    let callback = this._state === 'has-resolution' ? deferred.resolve : deferred.reject;
    if (!callback) {
      return;
    }
    let ret;
    try {
      ret = callback(this._result);
    } catch (e) {
      this._reject(deferred.promise, e);
      return;
    }
    this._resolve(deferred.promise, ret);
    this._processResult(deferred);
  }

  then(onFulfillment, onRejection) {
    let promise = new (this.constructor)(noop);
    this._buildPromise(new Deferred(onFulfillment, onRejection, promise));
    return promise;
  }

  catch(onRejection) {
    this.then(undefined, onRejection);
  }

  static all() {

  }

  static race() {

  }

  static reject(value) {
    return new Promise2((resolve, reject) => {
      reject(value);
    });
  }

  static resolve(value) {
    return new Promise2((resolve, reject) => {
      resolve(value);
    });
  }
}

module.exports = Promise2;