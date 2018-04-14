<style>
.page-home {
  color: red;
}
</style>

<template>
  <div class="page-home">
    <h1>Home</h1>
  </div>
</template>
<script>
export default {
  asyncData({ store, route }) {
    // 触发 action 后，会返回 Promise
    return store.dispatch('doLogin', true);
  }
};
</script>

