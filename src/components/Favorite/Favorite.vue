<template>
    <div class="films">
        <Film 
            v-for='i in allFavoriteFilms' 
            :key='i.id' 
            :id='i.id'
            :title='i.title'
            :img='i.large_cover_image'
            btnText='Delete from favorites'
            @buttonClick='deleteFavoriteFilm'
            :btn='"btnRed"'
        />
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

<style scoped>
.films {
    display: grid;
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    background-color: rgb(89, 89, 89);
    border-radius: 5px;
    grid-gap: 10px;
    height: 100vh;
}
</style>