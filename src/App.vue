<template>
  <div class='app'>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
@import '/src/assets/style/reset.css';
.app {
  background: rgb(110, 110, 110);
}
</style>
