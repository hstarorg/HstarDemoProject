import Vue from 'vue';
const bus = new Vue();

const $on = (eventName, handler, scope, once = false) => {
  if (once) {
    bus.$once(eventName, handler);
  } else {
    bus.$on(eventName, handler);
  }
  if (scope) {
    let originalDestroy = scope.$destroy;
    scope.$destroy = function () {
      bus.$off(eventName, handler);
      originalDestroy.call(this);
    }
  }
};

export const eventBus = {
  on(eventName, handler, scope) {
    $on(eventName, handler, scope);
  },
  once(eventName, handler, scope) {
    $on(eventName, handler, scope, true);
  },
  emit(eventName, ...args) {
    bus.$emit(eventName, ...args);
  }
};
