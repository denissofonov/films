<template>
    <div class='items'>
        <Film 
            v-for='film in allFilms' 
            :key='film.id' 
            :id='film.id'
            :title='film.title'
            :rating='film.rating'
            :img='film.large_cover_image'
            btnText='Добавить'
            @buttonClick='setFavoriteFilm'
        />
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
            return this.$store.getters['films/ALL_FILMS']
        }
    },
    methods: {
        setFavoriteFilm(id) {
            if(!this.$store.state.favoriteFilms.favoriteFilmsIds.includes(id)) {
                this.$store.commit('favoriteFilms/SET_FAVORITE_FILM_ID', id)
            }
        }
    }
}
</script>

<style>
.items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
    margin: 0 auto;
    width: 90%;
}
.information {
    padding: 10px;
}
</style>