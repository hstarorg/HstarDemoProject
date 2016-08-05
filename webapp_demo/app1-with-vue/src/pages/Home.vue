<style>
  .fixed-header{
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
  </header>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    data () {
      return {
        test: 1
      };
    },
    computed: {},
    events: {},
    methods: {

    }
  }
</script>