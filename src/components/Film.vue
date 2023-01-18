<template>
    <div class='film'>   
        <img class='img' :src='img' alt='' @click='dialogVisible = true'>
        <div class='information'>
            <div 
                class='title' 
                @click='titleClick'
                @dragstart='onDragStar($event, id)'
                draggable='true'
                >
                {{ title }}
            </div>
            <div class='genres'>Genres: {{ getGenres }}</div>
            <div class='year'>Year: {{ year }}</div>
            <div class='rating'>Rating: {{ rating }}</div>
            <div class='button'>
                <slot name='button'/>
            </div>
        </div>
        <el-dialog 
            v-model='dialogVisible' 
            width="30%" 
            :align-center="true" 
            :show-close="false" 
            :center="true" 
            :lock-scroll="false"
            >
            <img class='img' :src='img' alt=''>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'Film',

    data() {
        return {
            dialogVisible: false
        }
    },

    methods: {
        titleClick() {
            this.$router.push({path:`/catalog/${this.id}`})
        },
        onDragStar(e, id) {
            e.dataTransfer.dropEffect = 'move'
            e.dataTransfer.effectAllowed = 'move'
            e.dataTransfer.setData('id', id)
        }
    },

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

<style lang='sass' scoped>
.film
    display: flex
    gap: 20px
    width: 350px
    height: 250px
    .img 
        border-radius: 10px
    .information
        display: flex
        flex-direction: column
        gap: 20px
        font-size: 14px
        color: #FFFAF0
        padding: 5px
@media (max-width: 930px)
        .film
            width: 400px
            height: 400px
@media (max-width: 760px)
        .film
            width: 300px
            height: 300px
@media (max-width: 450px)
        .film
            width: 250px
            height: 250px
</style>
