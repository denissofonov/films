<template>
    <div class="film">
        <Film
            v-for='i in allFavoriteFilms'
            :key='i.id'
            :id='i.id'
            :title='i.title'
            :img='i.large_cover_image'
            btnText='Удалить кино'
            @buttonClick='deleteFavoriteFilm'
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

<style>
.film {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgb(89, 89, 89);
    border-radius: 10px;
    grid-gap: 10px;
}
</style>
