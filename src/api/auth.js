import api from '@/auth-test/login.js'

export default {
    login(login, password) {
        return api.login(login, password)
    }
}