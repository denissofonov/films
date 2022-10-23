<template>
    <div class='catalog'>
        <div class='loading' v-if='$store.state.films.loading'>Loading</div>
        <div class='error' v-else-if='$store.state.films.error'>Error</div>
        <FilmsList v-else/>
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
        Pagination
    },
    data() {
        return {
            error: false,
            loading: true
        }
    },
    methods: {
        fetchFilms() {
            this.$store.dispatch('films/FETCH_FILMS')
        }
    },
    mounted() {
        this.fetchFilms()
    }
}
</script>

<style>
.catalog {
    width: 90%;
    margin: 0 auto;
    padding: 30px;
}
</style>