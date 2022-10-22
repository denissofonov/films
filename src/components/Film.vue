<template>
    <div class='film'>   
        <img class='img' :src='img' alt=''>
        <div class='information'>
            <div>{{ title }}</div>
            <div>Рейтинг {{ rating }}</div>
            <button @click='buttonClick(id)'>{{ btnText }}</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Film',
    props: {
        title: String,
        rating: Number,
        img: String,
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
<style>
.film {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: rgb(89, 89, 89);
    border-radius: 10px;
    grid-gap: 10px;
}
.img {
    border-radius: 10px;
}
</style>
