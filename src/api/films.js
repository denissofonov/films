import api from '@/api/api'

export default {
    getFilms(limit, page) {
        const params = {
            limit,
            page,
        }
        return api.get('list_movies.json', {params})
    },
    getFilmById(id) {
        const params = {
           movie_id: id
        }
        return api.get('movie_details.json', {params})
    }
}