<template>
    <div class='header'>
        <Nav />
    </div>
</template>

<script>
import Nav from '@/components/Header/Nav.vue'

export default {
    name: 'Header',
    components: {
    Nav,
    }
}
</script>

<style>
.header {
    width: 90%;
    margin: 0 auto;
    background-color: transparent;
}
</style>