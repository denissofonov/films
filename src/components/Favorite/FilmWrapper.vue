<template>
    <Film
    :title='favoriteFilms.title'
    :img='favoriteFilms.large_cover_image'
    />
</template>
<script>
import Film from '@/components/Film.vue'
export default {
    name: 'FilmWrapper',
    components: {
        Film,
    },
    props: {
        id: Number
    },
    mounted() {
        this.$store.dispatch('favoriteFilms/FETCH_FAVORITE_FILM', this.id)
        .then((response) => {
            this.$store.commit('favoriteFilms/SET_FAVORITE_FILM', response.data.data.movie)
            debugger
        })
    }
}
</script>
<style>
</style>