class TestCtrl {
  constructor($animate, $parse) {
    this.$animate = $animate;
    this.$parse = $parse;

    this._init();
  }

  _init() {
    this.test = "name2";
    this.ck1 = true;
    this.names = ['abc', 'edf', 'aaa', '', 0, true, null];
     this.name = 1;
    var self = this;
    setTimeout(function () {
      var element = $('.slide-animation');
      console.log('ele');
      self.$animate.on('enter', element, function (data) {
        console.log('入场动画开始...');
      });
    }, 1000);
  }

  startAnimate() {
    var $el = $('.slide-animation');
    this.$animate.enabled(false, $el); //禁用了元素动画，以下代码虽然执行，但看不到动画效果了。
    this.$animate.enter($el, $el.parent()).then(function () {
      console.log('enter');
    });
  }

  testParse() {
    var context = { user: { name: 'Jay' } };
    var locals = { user: { name1: 'Local Jay' } };
    var getter = this.$parse('user.name');
    console.log(getter(context));
    getter.assign(context, 'Jay2');
    console.log(context);
    debugger
    console.log(getter(context, locals, { user: { name: 'Haha' } }));
  }
}

TestCtrl.$inject = ['$animate', '$parse'];

angular.module('app', ['ngAnimate'])
  .animation('.slide-animation', ['$animateCss', function ($animateCss) {
    return {
      enter: function (element, doneFn) {
        var animation = $animateCss(element, {
          from: { background: 'black' },
          to: { background: 'blue' },
          duration: 2 // one second
        });
        animation.start().done(doneFn);
      },
      leave: function (element, doneFn) {
        var animation = $animateCss(element, {
          from: { fontSize: '12px' },
          to: { fontSize: '25px' },
          duration: 2 // one second
        });
        animation.start().done(doneFn);
      }
    }
  }])
  .controller('TestCtrl', TestCtrl);

angular.bootstrap(document, ['app']);