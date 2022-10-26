<template>
    <div class='header'>
        <div class='logo'><h1>LOGO</h1></div>
        <Nav class='nav'/>
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

<style lang='sass'>
    .header
        display: grid
        grid-template-columns: minmax(50px, auto) 1fr
        grid-template-rows: 65px
        align-self: center
        .logo
            color: white
            font-size: 26px
            display: flex
            align-items: center
            width: 300px
            padding: 0 0 0 50px
            height: auto
        .nav
            display: flex
            align-items: center
</style>