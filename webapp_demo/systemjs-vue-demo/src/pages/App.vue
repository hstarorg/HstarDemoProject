<template>
  <div id="app">
    这是个主页
    <router-link to="/">首页</router-link>
    <router-link to="/page2">第二页</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {

  };
</script>
