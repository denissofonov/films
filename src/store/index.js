import { createStore } from 'vuex'
import films from '@/store/modules/films.js'
import favoriteFilms from '@/store/modules/favoriteFilms.js'
import user from '@/store/modules/user.js'

export default createStore({
    modules: {
      films,
      favoriteFilms,
      user
    }
  })