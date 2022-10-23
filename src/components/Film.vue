<template>
    <div class='film'>   
        <img class='img' :src='img' alt=''>
        <div class='information'>
            <div class='title'>{{ title }}</div>
            <div class='genres'>Genres: {{ genres }}</div>
            <div class='year'>Year: {{ year }}</div>
            <div class='rating'>Rating: {{ rating }}</div>
            <div class='button'>
                <el-button type='' link>
                    <button :class='btn' @click='buttonClick(id)'>{{ btnText }}</button>
                </el-button>
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
        btnText: String,
        btn: String
    },
    methods: {
        buttonClick(id) {
            this.$emit('buttonClick', id)
        }
    }
}
</script>
<style scoped>
.buttons {
    font-size: 10px;
}
.btnGreen {
    font-size: 16px;
    color: rgb(0, 255, 110);
}
.btnRed {
    font-size: 16px;
    color: rgb(199, 47, 47);
}
</style>
