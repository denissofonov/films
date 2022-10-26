<template>
    <div class='catalog'>
        <div class='page-limit'>
            <div class='text'>Show by:</div>
            <el-button type='' link v-for='page in pages' :key='page' @click='setLimit(page)'>
                {{ page }}
            </el-button>
            
        </div>
        <div class='loading' v-if='$store.state.films.loading'>Loading</div>
        <div class='error' v-else-if='$store.state.films.error'>Error</div>
        <FilmsList v-else/>
        <Pagination />
        <PaginationEl/>
    </div>
</template>

<script>
import FilmsList from '@/components/Catalog/FilmsList.vue'
import Pagination from '@/components/Catalog/Pagination.vue'
import PaginationEl from '@/components/Catalog/PaginationEl.vue'
export default {
    name: 'Catalog',
    components: {
    FilmsList,
    Pagination,
    PaginationEl
},
    data() {
        return {
            error: false,
            loading: true,
            pages: [10, 20, 30]
        }
    },
    computed: {
        limit() {
            return this.$store.state.films.limit
        }
    },
    watch: {
        limit() {
            this.$store.dispatch('films/FETCH_FILMS')
        }
    },
    methods: {
        fetchFilms() {
            this.$store.dispatch('films/FETCH_FILMS')
        },
        setLimit(limit) {
            this.$store.commit('films/SET_LIMIT', limit)
        }
    },
    mounted() {
        this.fetchFilms()
    }
}
</script>

<style lang='sass' scoped>
.catalog
    margin: 0 auto
    font-family: Archivo
    min-height: 100vh
    .page-limit
        display: flex
        align-items: center
        font-size: 14px
        color: #606266
        margin: 0 0 20px 0
        padding: 0 0 0 50px
        font-size: 14px
        .text
            margin-right: 12px
        .button:not(:last-child)
</style>