<template>
    <div class='header'>
        <div class='header__logo'><h1>LOGO</h1></div>
        <Nav class='header__nav'/>
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
        display: flex
        align-items: center
        position: fixed
        background-color: black
        width: 1100px
        padding: 15px 0 0 0
        &__logo
            color: white
            font-size: 36px
            display: flex
            align-items: center
            width: 300px
            padding: 0 0 0 20px
            height: auto
            color: brown
        &__nav
            display: flex
            align-items: center
@media (max-width: 1200px) 
    .header
        width: 1000px
@media (max-width: 1050px) 
    .header
        width: 900px
@media (max-width: 900px) 
    .header
        width: 700px
@media (max-width: 700px) 
    .header
        width: 400px
@media (max-width: 450px) 
    .header
        width: 350px
</style>