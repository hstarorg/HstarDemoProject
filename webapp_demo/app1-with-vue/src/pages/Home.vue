<style>
  .fixed-header {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 640px;
    background: gray;
    height: 50px;
  }
</style>

<template>
  <header class="fixed-header">
    ABC
    <button v-on:click="test2()">Test</button>
  </header>
  <mt-actionsheet :actions="actions" :visible.sync="sheetVisible">
  </mt-actionsheet>
  <mt-datetime-picker :visible.sync="true" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日">
  </mt-datetime-picker>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  import ajax from './../services/ajax';
  export default {
    name: 'Home',
    components: {},
    data () {
      return {
        test: 1,
        actions: [{name: 'ABC', method: this.check}, {name: '男', method: this.check}, {name: '女', method: this.check}],
        sheetVisible: false
      };
    },
    ready () {
      ajax.get('fdfasfdsa')
      .then((data) => {
        console.log(data);
      });
    },
    computed: {},
    events: {},
    methods: {
      test2 () {
        this.sheetVisible = true;
        Toast('提示信息ABC');
        MessageBox('提示', 'Good Bye');
      },
      check (ab) {
        console.log(ab);
      }
    }
  }
</script>