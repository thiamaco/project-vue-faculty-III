<template>
  <Header/>
    <Footer />
  </template>
<script>

import Footer from './components/Footer.vue';
import Header from './components/Header.vue';


export default {
  components: {
    Footer,
    Header
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
