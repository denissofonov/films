<template>
    <div class='home'>
        <div class='title'>Random selection for you</div>
        <div class='film'>
            <div class='image'><img class='img' :src='film.large_cover_image'/></div>
            <div class='info'>
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
    .title
        margin: 10px 0 10px 200px
    .film
        color: #FDF5E6
        display: flex
        width: 80%
        margin: 0 auto
        gap: 80px
        .info
            display: flex
            flex-direction: column
            width: 800px 
            gap: 20px
    .img
        height: 400px    
</style>