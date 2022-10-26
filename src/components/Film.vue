<template>
    <div class='film'>   
        <img class='img' :src='img' alt=''>
        <div class='information'>
            <div class='title' @click='titleClick'>{{ title }}</div>
            <div class='genres'>Genres: {{ getGenres }}</div>
            <div class='year'>Year: {{ year }}</div>
            <div class='rating'>Rating: {{ rating }}</div>
            <div class='button'>
                <slot name='button'/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Film',
    props: {
        title: String,
        genres: Array,
        rating: Number,
        img: String,
        year: Number,
        id: Number,
        btnText: String,
        btn: String
    },
    computed: {
        getGenres() {
            if(this.genres) {
                return this.genres.join(', ') 
            }
            return 'Genre missing'
        }
    },
    methods: {
        titleClick() {
            this.$router.push({path:`/catalog/${this.id}`})
        }
    }
}
</script>
<style lang='sass' scoped>
.film
    display: grid
    grid-template-columns: 140px 200px
    grid-gap: 10px
    .img 
        border-radius: 10px
    .information
        font-size: 14px
        color: white
        padding: 5px
        .title
            cursor: pointer
            font-size: 16px
        .title, .genres, .year, .rating
            margin: 0 0 10px 0
</style>
