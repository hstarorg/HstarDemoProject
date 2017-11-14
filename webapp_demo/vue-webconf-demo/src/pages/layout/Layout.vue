<template>
  <div class="page-layout">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/user/page11">User -> Page11</router-link>
    <router-link to="/user/page12">User -> Page12</router-link>
    <router-link to="/product/page21">Product -> Page21</router-link>
    <router-link to="/product/page22">Product -> Page22</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
