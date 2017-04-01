// var source = Rx.Observable.create(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete(); // 当调用complete之后，就不会再输出之后的next了。
//   observer.next(4);
// });

// source.subscribe(v => {
//   console.log(v);
// });

// var source = Rx.Observable.fromEvent(document, 'click');

// var evtObj = source.subscribe(e => {
//   console.log(e);
// });

// setTimeout(() => {
//   evtObj.unsubscribe();
// }, 5000);

// var p = Promise.resolve('ab');

// Rx.Observable.fromPromise(p)
//   .subscribe(v => {
//     console.log('当Promise resolve的时候执行', v);
//   }, reason => {
//     console.log('当Promise reject的时候执行', reason);
//   });


// Rx.Observable.interval(1000)
//   .subscribe(count => {
//     console.log('我每秒都会输出', count); // count会下标，从0开始
//   });

// Rx.Observable.timer(5000, 2000)
//   .subscribe(idx => {
//     console.log('Timer', idx); // idx是下标，从0开始
//   });

// var source = Rx.Observable.never();
// source.subscribe(v => {
//   console.log(v);
// });

// var source = Rx.Observable.empty();
// source.subscribe(v => {
//   console.log(v);
// }, err => {
//   console.log(err);
// }, c => {
//   console.log('complete');
// });

// var source = Rx.Observable.throw(new Error('Error'));
// source.subscribe(v => {
//   console.log(v);
// }, err => {
//   console.log(err);
// }, c => {
//   console.log('complete');
// });

var subject = {
  listeners: [],
  addListener(fn) {
    this.listeners.push(fn);
  },
  removeListener(fn) {
    let idx = this.listeners.indexOf(fn);
    if (idx >= 0) {
      this.listeners.splice(idx, 1);
    }
  },
  notify(msg) {
    this.listeners.forEach(listener => listener(msg));
  }
};

Rx.Observable.fromEventPattern(subject.addListener.bind(subject), subject.removeListener.bind(subject))
  .subscribe(console.log); // 输出 'hello, observable'
subject.notify('hello, observable');