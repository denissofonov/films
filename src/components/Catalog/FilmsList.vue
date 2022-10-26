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
                <el-button class="btnGreen" @click='setFavoriteFilm(film.id)' type='success' link>
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
    computed: {
        allFilms() {
            return this.$store.getters['films/GET_ALL_FILMS']
        }
    },
    methods: {
        setFavoriteFilm(id) {
            if(!this.$store.state.favoriteFilms.favoriteFilmsIds.includes(id)) {
                this.$store.commit('favoriteFilms/SET_FAVORITE_FILM_ID', id)
            }
            this.$store.commit('favoriteFilms/DELETE_FAVORITE_FILM_ID', id)
        },
        buttonValue(id) {
            if(this.$store.state.favoriteFilms.favoriteFilmsIds.includes(id)) {
                return 'Added to favorites'
            }
            return 'Add to favorites'
        }
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
</style>
