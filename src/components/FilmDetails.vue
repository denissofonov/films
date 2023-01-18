<template>
    <div class='film-details'>
        <img class='img' :src='film.large_cover_image'/>
        <div class='information' ref='bg'>
            <div class='title'>{{film.title}}</div>
            <div class='slug'>Slug: {{film.slug}}</div>
            <div class='year'>Year: {{film.year}}</div>
            <div class='rating'>Rating: {{film.rating}}</div>
            <div class='runtime'>Runtime: {{film.runtime}}</div>
            <div class='genres'>Genres: {{getGenres}}</div>
            <div class='description'>{{film.description_full}}</div>
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
.film-details
    min-height: 100vh
    display: grid
    margin: 0 auto
    grid-template-columns: 400px 1fr
    grid-template-rows: 1fr
    width: 1400px
    color: #FFFAF0
    padding: 50px
    .img
        border-radius: 10px
    .information
        display: flex
        flex-direction: column
        grid-gap: 20px
        border-radius: 10px
        height: 500px
        padding: 30px 0 0 25px
        .title
            font-size: 24px
</style>
