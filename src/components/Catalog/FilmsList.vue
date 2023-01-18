<template>
    <div class='films'>
        <Film 
            v-for='film in allFilms' 
            :key='film.id' 
            :id='film.id'
            :title='film.title'
            :rating='film.rating'
            :year='film.year'
            :img='film.large_cover_image'
            :genres='film.genres'
        >
            <template #button>
                <el-button v-if='this.$store.state.user.isAccess' @click='setFavoriteFilm(film.id)' type='success' link>
                    {{ buttonValue(film.id) }}
                </el-button>
            </template>
        </Film>
    </div>
</template>

<script>
import Film from '@/components/Film.vue'

export default {
    name: 'Items',

    components: {
        Film
    },

    methods: {
        setFavoriteFilm(id) {
            this.$store.dispatch('favoriteFilms/SET_FAVORITE_FILM_ID', id)
        },
        buttonValue(id) {
            if(this.$store.state.favoriteFilms.favoriteFilmsIds.includes(id)) {
                return 'Added to favorites'
            }
            return 'Add to favorites'
        }
    },

    computed: {
        allFilms() {
            return this.$store.getters['films/GET_ALL_FILMS']
        }
    }
}
</script>

<style lang='sass' scoped>
.films
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    gap: 30px
    margin: 0 100px
</style>
