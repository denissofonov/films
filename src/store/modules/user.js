import api from '@/api/auth'

export default {
    state: {
        isAccess: false,
        error: false
    },
    mutations: {
        SET_ACCESS(state, access) {
            state.isAccess = access
        },
        SET_ERROR_VALUE(state, error) {
            state.error = error
        }
    },
    actions: {
        LOGIN(context, data) {
            return api.login(data.login, data.password)
                .then((response) => {
                    context.commit('SET_ACCESS', response.success)
                })
                .catch((error) => {
                    context.commit('SET_ERROR_VALUE', error.msg)
                    throw error
                })
        }
    },
    getters: {
        GET_ACCESS(state) {
            return state.isAccess
        },
        GET_ERROR(state) {
            return state.error
        }
    },
    namespaced: true
}