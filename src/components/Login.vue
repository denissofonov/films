<template>
    <div>
        <el-input v-model='login'/>
        <el-input v-model='password'/>
        <el-button :loading="false" @click='auth()'>Login</el-button>
        <div v-if='getAccess'>
            Vse Ok
        </div>
        <div v-else-if='getError'>
            ERROR!!!
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        auth() {
            this.$store.dispatch('user/LOGIN', {login: this.login, password: this.password})
                .then(()=>{
                    this.$router.push('/catalog')
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
<style>
</style>
