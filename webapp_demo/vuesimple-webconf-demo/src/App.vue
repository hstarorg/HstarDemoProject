<template>
  <div class="page-app">
    Show a random string: 
    <strong>{{user.rnd}}</strong>
    <h2>{{abc}}</h2>
    <hr>
    <button @click="setUserName">Set Name</button>
    <button @click="updateState">Update State</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      canSet: true
    };
  },
  computed: {
    abc() {
      const state = this.$store.state;
      return `${state.a}|${state.b}|${state.c}`;
    }
  },
  methods: {
    setUserName() {
      this.user.rnd = Math.random().toString(16);
      this.$forceUpdate();
    },
    updateState() {
      this.$store.commit('CHANGE_STATE', {
        a: Math.random(),
        b: Math.random(),
        c: Math.random()
      });
    }
  }
};
</script>
