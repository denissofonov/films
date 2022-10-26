<template>
    <nav class='nav'>
            <router-link class='button' to='/'>
                <el-button class='el-button' type='' link >Home</el-button>
            </router-link>
            <router-link class='button' to='/catalog'>
                <el-button class='el-button' type='' link>Catalog</el-button>
            </router-link>
            <router-link v-if='getAccess' class='button' to='/favorite'>
                <el-button class='el-button' type='' link>Favorites</el-button>
            </router-link>
            <router-link v-else class='button' to='/login'>
                <el-button class='el-button' type='' link>Login</el-button>
            </router-link>
    </nav>
</template>

<script>
export default {
    Name: 'Nav',
    computed: {
        getAccess() {
            return this.$store.getters['user/GET_ACCESS']
        }
    }
}
</script>

<style lang='sass' scoped>
.button:not(:last-child)
    margin: 0 25px 0 0
.el-button
    font-size: 16px
</style>