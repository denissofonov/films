<template>
    <div class='home'>
        <div class='home__title'>Random selection for you</div>
        <div class='home__film'>
            <div class='home__image'><img class='home__img' :src='film.large_cover_image'/></div>
            <div class='home__info'>
                <div class=''>{{ film.title }}</div>
                <div class=''>{{ film.description_full }}</div>
                <div class=''>{{ film.rating }}</div>
                <div class=''>{{ film.runtime }}</div>
                <div class=''>{{ film.year }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    data() {
        return {
            film: []
        }
    },
    mounted() {
        this.$store.dispatch('favoriteFilms/FETCH_FAVORITE_FILM', Math.floor(Math.random() * this.$store.state.films.filmsCount))
            .then((response) => {
                this.film = response.data.data.movie
                debugger
            })
        }
    }
</script>

<style lang='sass' scoped>
.home
    height: 100vh  
    &__title
        margin: 10px 0 10px 200px
    &__film
        color: #FDF5E6
        display: flex
        width: 80%
        margin: 0 auto
        gap: 80px
    &__info
        display: flex
        flex-direction: column
        width: 800px 
        gap: 20px
    &__img
        height: 400px    
</style>