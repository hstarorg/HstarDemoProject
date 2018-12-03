<template>
  <div id="app">
    <h1>Vue-Nice-Tooltip Demo</h1>
    <hr>
    <div class="demo">
      <nice-tooltip to-portal="modal" :content="'xxx'">
        <template slot="content">111111111</template>
        <button>点我查看内容</button>
      </nice-tooltip>
    </div>
    <portal-target name="modal"></portal-target>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    onClick() {
      alert('test');
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
