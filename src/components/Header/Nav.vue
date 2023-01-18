<template>
    <nav class='nav'>
            <router-link class='button' to='/home'>
                <el-button class='el-button' type='' link>Home</el-button>
            </router-link>
            <router-link class='button' to='/catalog'>
                <el-button class='el-button' type='' link>Catalog</el-button>
            </router-link>
            <router-link v-if='getAccess' class='button' to='/favorite'>
                <el-button 
                    @drop='onDrop' 
                    class='el-button' 
                    type='' 
                    link
                    @dragover.prevent
                    @dragenter.prevent
                >Favorites</el-button>
            </router-link>
            <router-link v-else class='button' to='/login'>
                <el-button class='el-button' type='' link>Login</el-button>
            </router-link>
            <div v-if='getAccess'>
                <el-popconfirm 
                    title='Exactly logout?' 
                    @confirm='logout'
                    :hide-icon='true'
                    confirm-button-type='success'
                    cancel-button-type='info'
                    class='popconfirm'
                    >
                    <template #reference>
                        <el-button 
                            class='el-button logout' 
                            type='' 
                            link
                            >Logout
                        </el-button>
                </template>
            </el-popconfirm>
            </div>
    </nav>
</template>

<script>
export default {
    Name: 'Nav',

    methods: {
        onDrop(e) {
            const id = e.dataTransfer.getData('id')
            this.$store.dispatch('favoriteFilms/SET_FAVORITE_FILM_ID', id)
        },
        logout() {
            this.$store.commit('user/SET_ACCESS', false)
        }
    },
    
    computed: {
        getAccess() {
            return this.$store.getters['user/GET_ACCESS']
        },
    },
}
</script>

<style lang='sass' scoped>
.nav
    display: flex
.button:not(:last-child)
    margin: 0 25px 0 0
.el-button
    font-size: 16px
.popconfirm
    background-color: grey !important
</style>