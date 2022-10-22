import { createStore } from 'vuex'
import films from '@/store/modules/films.js'
import favoriteFilms from '@/store/modules/favoriteFilms.js'

export default createStore({
    modules: {
      films,
      favoriteFilms
    }
  })