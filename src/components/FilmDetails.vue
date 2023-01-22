<template>
    <div class='details'>
        <img class='details__img' :src='film.large_cover_image'/>
        <div class='details__information' ref='bg'>
            <div class='details__title'>{{film.title}}</div>
            <div class='details__slug'>Slug: {{film.slug}}</div>
            <div class='details__year'>Year: {{film.year}}</div>
            <div class='details__rating'>Rating: {{film.rating}}</div>
            <div class='details__runtime'>Runtime: {{film.runtime}}</div>
            <div class='details__genres'>Genres: {{getGenres}}</div>
            <div class='details__description'>{{film.description_full}}</div>
        </div>
        <div @click='setDeleteFavoriteFilm()'>{{ buttonValue }}</div>
    </div>
</template>

<script>
export default {
    name: 'FilmDetails',

    data: () => {
        return {
            film: {}
        }
    },

    methods: {
        setDeleteFavoriteFilm() {
            const id = this.film.id
            if (!this.$store.state.favoriteFilms.favoriteFilmsIds.includes(id)) {
                this.$store.dispatch('favoriteFilms/SET_FAVORITE_FILM_ID', id)
            } else {
                this.$store.commit('favoriteFilms/DELETE_FAVORITE_ID', id)
            }
        },
    },

    computed: {
        getGenres() {
            if(this.film.genres) {
                return this.film.genres.join(', ') 
            }
            return 'Genre missing'
        },
        buttonValue() {
            if (this.$store.state.favoriteFilms.favoriteFilmsIds.includes(this.film.id)) {
                return 'Delete from favorites'
            } 
            return 'Add to favorites'
        }
    },
    
    mounted() {
        this.$store.dispatch('favoriteFilms/FETCH_FAVORITE_FILM', this.$route.params.id)
            .then((response) => {
                this.film = response.data.data.movie
                this.$refs.bg.style.background = `url(${this.film.background_image_original})`
            })
    }
}
</script>
<style lang='sass' scoped>
.details
    min-height: 100vh
    display: grid
    margin: 0 auto
    grid-template-columns: 400px 1fr
    grid-template-rows: 1fr
    width: 1400px
    color: #FFFAF0
    padding: 50px
    &__img
        border-radius: 10px
    &__information
        display: flex
        flex-direction: column
        grid-gap: 20px
        border-radius: 10px
        height: 500px
        padding: 30px 0 0 25px
    &__title
        font-size: 24px
</style>
