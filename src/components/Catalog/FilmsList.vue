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
                <el-button class="btnGreen" @click='setFavoriteFilm(film.id)' type='success'>
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
            return this.$store.getters['films/ALL_FILMS']
        }
    },
    methods: {
        setFavoriteFilm(id) {
            if(!this.$store.state.favoriteFilms.favoriteFilmsIds.includes(id)) {
                this.$store.commit('favoriteFilms/SET_FAVORITE_FILM_ID', id)
            }
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

<style>
.films {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 0 auto;
    width: 100%;
}
.film {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgb(100, 79, 79);
    grid-gap: 10px;
    height: 300px;
    width: 400px;
    margin: 0 auto;
}
.img {
    border-radius: 5px;
    height: 100%;
    padding: 5px;
}
.information {
    padding: 5px 0 0 0;
    display: grid;
    grid-template-rows: 60px 50px 30px 30px 30px;
    color: aliceblue;
}
.title {
    font-size: 20px;
    font-weight:700;
    padding: 5px;
}
.genres, .year, .rating, .button {
    padding: 5px;
}
</style>