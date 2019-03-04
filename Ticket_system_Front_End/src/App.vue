<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/verify">Verify</router-link> |
      <router-link to="/admin">Admin</router-link>
      
    </div>
      <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'scss/main';

  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: inherit;
  // color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #f3b01e;
    &.router-link-exact-active {
       color: rgb(178, 95, 255);
    }
  }
}

</style>
