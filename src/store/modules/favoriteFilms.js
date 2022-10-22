import apiFavoriteFilms from '@/api/films'

export default {
    state: {
        favoriteFilmsIds: [],
        favoriteFilms: []
    },
    mutations: {
        SET_FAVORITE_FILM_ID(state, id) {
            state.favoriteFilmsIds.push(id)
        },
        SET_FAVORITE_FILM(state, film) {
            state.favoriteFilms.push(film)
        },
        RESET_FAVORITE_FILMS(state) {
            state.favoriteFilms = []
        },
        DELETE_FAVORITE_ID(state, id) {
            let arr = state.favoriteFilmsIds.filter(i => i != id)
            state.favoriteFilmsIds = arr
        },
        DELETE_FAVORITE_FILM(state, id) {
            let arr = state.favoriteFilms.filter(i => i.id != id)
            state.favoriteFilms = arr
        }
    },
    actions: {
        FETCH_FAVORITE_FILM(context, id) {
            return apiFavoriteFilms.getFilmById(id)
        }
    },
    getters: {
        ALL_FAVORITE_FILMS_IDS(state) {
            return state.favoriteFilmsIds
        },
        ALL_FAVORITE_FILM(state) {
            return state.favoriteFilms
        }
    },
    namespaced: true
}