<template>
    <div class='catalog'>
        <div class='page-limit'>
            <div class='text'>Show by:</div>
            <button type='' link v-for='page in pages' :key='page' @click='setLimit(page)'>{{ page }}</button>
        </div>
        <div>
            <div v-if='$store.state.films.loading'>Loading</div>
            <div v-else-if='$store.state.films.error'>Error</div>
            <FilmsList v-else/>
        </div>
        <Pagination />
    </div>
</template>

<script>
import FilmsList from '@/components/Catalog/FilmsList.vue'
import Pagination from '@/components/Catalog/Pagination.vue'

export default {
    name: 'Catalog',
    components: {
    FilmsList,
    Pagination,
},
    data() {
        return {
            error: false,
            loading: true,
            pages: [10, 20, 30]
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
    mounted() {
        this.fetchFilms()
    }
}
</script>

<style lang='sass' scoped>
.catalog
    display: flex
    flex-direction: row
    flex-wrap: wrap
    gap: 15px
    .page-limit
        display: flex
        color: grey
        justify-content: center
        align-items: center
        padding: 0 0 15px 0
        gap: 10px
        .text
        padding: 0 0 15px 0
</style>