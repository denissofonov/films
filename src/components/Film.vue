<template>
    <div class='film'>   
        <img class='img' :src='img' alt=''>
        <div class='information'>
            <div class='title'>{{ title }}</div>
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
    }
}
</script>
<style scoped>
.buttons {
    font-size: 10px;
}
</style>
