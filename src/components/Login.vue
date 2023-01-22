<template>
    <div class='login'>
        <div class='login__form'>
            <div class='login__title'>Login</div>
            <el-input 
                v-model='login' 
                placeholder='Login - 123' 
                class='login__input'
                :disabled='loading'
                :class='{shadow: getError}'
                prefix-icon='User'
            />
            <el-input 
                v-model='password' 
                placeholder='Password - 123' 
                class='login__input' 
                show-password
                :disabled='loading'
                :class='{shadow: getError}'
                prefix-icon='Lock'
            />
            <div 
                v-if='getError'
                class='login__error'
                >
                {{ getError }}
            </div>
            <el-button 
                :loading='loading' 
                @click='auth()' 
                class='button'
            >
                Login
            </el-button>
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
    min-height: calc(100vh - 95px)
    display: flex
    align-items: center
    justify-content: center
    &__form
        width: 500px
        height: 300px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap: 20px
    &__title
        font-size: 36px
        margin: 15px 0 0 0
    &__input
        width: 250px
        margin: 10px 0 5px 0
    &__button
        width: 250px
        margin: 15px 0 0 0
    &__register
        margin-top: 25px
    &__error
        font-size: 14px
        margin-top: 10px
        color: red
    .shadow
        box-shadow: 0px 0px 0px 1px rgba(255, 0, 0, 1)
        border-radius: 4px
</style>
