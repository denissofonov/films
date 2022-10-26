<template>
    <div class='login'>
        <el-input v-model='login' placeholder='Login' class='inputs'/>
        <el-input v-model='password' placeholder='Password' class='inputs' show-password/>
        <el-button :loading="loading" @click='auth()' >Login</el-button>
        <div v-if='getAccess'>
            Vse Ok
        </div>
        <div v-else-if='getError'>
            {{ getError }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            login: '',
            password: '',
            loading: false
        }
    },
    methods: {
        auth() {
            this.loading = true
            this.$store.commit('user/SET_ERROR_VALUE', false)
            this.$store.dispatch('user/LOGIN', {login: this.login, password: this.password})
                .then(()=>{
                    this.$router.push('/catalog')
                })
                .finally(() => {
                    this.loading = false
                })
        }
    },
    computed: {
        getAccess() {
            return this.$store.getters['user/GET_ACCESS']
        },
        getError() {
            return this.$store.getters['user/GET_ERROR']
        }
    }
}
</script>
<style lang='sass' scoped>
.login
    min-height: calc( 100vh - 65px )
    background-color: #fff
    width: 900px
    margin: 0 auto
    .inputs
        width: 100px
</style>
