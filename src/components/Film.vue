<template>
    <div class='film'>   
        <img class='img' :src='img' alt=''>
        <div class='information'>
            <div class='title'>{{ title }}</div>
            <div class='genres'>Genres: {{ genres }}</div>
            <div class='year'>Year: {{ year }}</div>
            <div class='rating'>Rating: {{ rating }}</div>
            <div class='button'>
                <button class='btn' @click='buttonClick(id)'>{{ btnText }}</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Film',
    props: {
        title: String,
        genres: String,
        rating: Number,
        img: String,
        year: Number,
        id: Number,
        btnText: String
    },
    methods: {
        buttonClick(id) {
            this.$emit('buttonClick', id)
        }
    }
}
</script>
<style scoped>
</style>
