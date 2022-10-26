<template>
    <div class="films">
        <Film 
            v-for='film in allFavoriteFilms' 
            :key='film.id' 
            :id='film.id'
            :title='film.title'
            :year='film.year'
            :rating='film.rating'
            :genres='film.genres'
            :img='film.large_cover_image'
        >
            <template #button>
                <el-button @click='deleteFavoriteFilm(film.id)' type='danger' link>
                   Delete from favorites
                </el-button>
            </template>
        </Film>
    </div>
</template>

<script>
import Film from '@/components/Film.vue'
export default {
    name: 'Favorite',
    components: {
        Film
    },
    methods: {
        deleteFavoriteFilm(id) {
            this.$store.commit('favoriteFilms/DELETE_FAVORITE_ID', id)
            this.$store.commit('favoriteFilms/DELETE_FAVORITE_FILM', id)
        },
        fetchSetFilm() {
            this.allFavoriteFilmsIds.forEach((i) => {
                this.$store.dispatch('favoriteFilms/FETCH_FAVORITE_FILM', i)
                    .then((response) => {
                        this.$store.commit('favoriteFilms/SET_FAVORITE_FILM', response.data.data.movie)
                    })
        })
        }
    },
    computed: {
        allFavoriteFilmsIds() {
            return this.$store.getters['favoriteFilms/ALL_FAVORITE_FILMS_IDS']
        },
        allFavoriteFilms() {
            return this.$store.getters['favoriteFilms/ALL_FAVORITE_FILM']
        }
    },
    mounted() {
        this.fetchSetFilm()
    },
    unmounted() {
        this.$store.commit('favoriteFilms/RESET_FAVORITE_FILMS')
    }
}
</script>

<style lang='sass' scoped>
.films
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    width: 1100px
    margin: 0 auto
    gap: 40px
    min-height: 100vh
    background-color: #black
</style>