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

<style lang='sass'>
@import '/src/assets/style/reset.css'
@font-face 
  font-family: Archivo
  src: url(@/fonts/archivo/Archivo-Regular.ttf)

.app
  background: black
  font-family: Archivo
  color: #EFEFEF
body
</style>
