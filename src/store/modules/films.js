import apiFilms from '@/api/films'

export default {
    state: {
        films: [],
        limit: 15,
        page: 1,
        filmsCount: null,
        loading: true,
        error: false
    },

    mutations: {
        UPDATE_FILMS(state, films) {
            state.films = films
        },
        SET_FILMS_COUNT(state, filmsCount) {
            state.filmsCount = filmsCount
        },
        SET_CURRENT_PAGE(state, page) {
            state.page = page
        },
        SET_LOADING(state, loadingValue) {
            state.loading = loadingValue
        },
        SET_LIMIT(state, limit) {
            state.limit = limit
        },
        ACTIVATE_ERROR(state) {
            state.error = true
        }
    },

    actions: {
        FETCH_FILMS(context) {
            context.commit('SET_LOADING', true)
            return apiFilms.getFilms(context.state.limit, context.state.page)
                .then((response) => {
                    context.commit('UPDATE_FILMS', response.data.data.movies)
                    context.commit('SET_FILMS_COUNT', response.data.data.movie_count)
                })
                .catch(() => {
                    context.commit('ACTIVATE_ERROR')
                })
                .finally(() => {
                    context.commit('SET_LOADING', false)
                })
        }
    },

    getters: {
        GET_ALL_FILMS(state) {
            return state.films
        },
        GET_PAGE_COUNT(state) {
            const pageCount = Math.ceil(state.filmsCount / state.limit)
            return pageCount
        }
    },
    
    namespaced: true
}